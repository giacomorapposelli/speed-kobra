import classes from './cart.module.css'
import Image from 'next/image'
import emptyCart from '../../public/icons/empty-cart.png'

function EmptyCart() {
  return (
    <div className={classes.emptyCart}>
      <h2>Your Cart is now empty</h2>
      <div>
        <Image src={emptyCart} alt="empty cart" height={30} width={30} />
      </div>
    </div>
  )
}

export default EmptyCart
