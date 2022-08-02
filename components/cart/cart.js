import classes from './cart.module.css'
import { CartContext } from '../../contexts/cart-context'
import { OverlayContext } from '../../contexts/overlay-context'
import { useState, useEffect, useContext } from 'react'
import CartItem from './cart-item'
import EmptyCart from './empty-cart'
import Button from '../ui/button'
import CheckoutForm from '../checkout-form/checkout-form'
import OrderResume from '../order-resume/order-resume'
import ThanksPopup from '../thanks-popup/thanks-popup'
import CartHeader from './cart-header'
import { calculateTotal } from '../../utils/utils'

function Cart() {
  const [checkoutForm, setCheckoutForm] = useState(false)
  const [orderPopUp, setOrderPopup] = useState(false)
  const [thanksPopUp, setThanksPopUp] = useState(false)
  const [purchased, setPurchased] = useState(false)
  const [user, setUser] = useState({})
  const { currentCart, setCurrentCart } = useContext(CartContext)
  const { overlay, setOverlay } = useContext(OverlayContext)
  const total = currentCart.reduce((acc, cur) => acc + cur.price * cur.qty, 0)

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'))
    if (cartData) {
      setCurrentCart(cartData)
    }
  }, [])

  useEffect(() => {
    if (!currentCart.length && !purchased) {
      setOrderPopup(false)
      setOverlay(false)
    }
    localStorage.setItem('cart', JSON.stringify(currentCart))
  }, [currentCart])

  const toggleCheckoutForm = e => {
    e.preventDefault()
    if (localStorage.getItem('user')) {
      setOrderResume()
    } else {
      setCheckoutForm(!checkoutForm)
      setOverlay(!overlay)
    }
  }

  const setOrderResume = () => {
    setOrderPopup(true)
    setOverlay(true)
    setCheckoutForm(false)
  }

  return (
    <div className={classes.cart}>
      <h2 className={classes.cartTitle}>YOUR CART:</h2>
      {currentCart.length === 0 && <EmptyCart />}
      {currentCart.length > 0 && (
        <div className={classes.cartContainer}>
          <CartHeader />
          <div className={classes.cartItemsContainer}>
            {currentCart &&
              currentCart.length > 0 &&
              currentCart.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
          </div>
          <div className={classes.checkoutContainer}>
            <div className={classes.buttons}>
              <Button onClick={toggleCheckoutForm}>Checkout</Button>
              <Button onClick={() => setCurrentCart([])}>Reset</Button>
            </div>
            <p>Total (excl. shipping): {total}€</p>
          </div>
        </div>
      )}
      {checkoutForm && (
        <CheckoutForm
          setOrderResume={setOrderResume}
          toggleCheckoutForm={toggleCheckoutForm}
          user={user}
          setUser={setUser}
        />
      )}
      {orderPopUp && (
        <OrderResume
          order={currentCart}
          total={total}
          user={user}
          setUser={setUser}
          setOrderPopup={setOrderPopup}
          setCheckoutForm={setCheckoutForm}
          setOverlay={setOverlay}
          setThanksPopUp={setThanksPopUp}
          setCurrentCart={setCurrentCart}
          setPurchased={setPurchased}
        />
      )}
      {thanksPopUp && (
        <ThanksPopup
          setThanksPopUp={setThanksPopUp}
          setOverlay={setOverlay}
          setPurchased={setPurchased}
        />
      )}
    </div>
  )
}

export default Cart
