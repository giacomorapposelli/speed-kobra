import classes from './cart.module.css'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'

export default function Quantityelect({ item }) {
  const { addToCart, decreaseQuantity } = useContext(CartContext)

  return (
    <div className={classes.quantityBox}>
      <p onClick={() => decreaseQuantity(item)} className={classes.plusMinus}>
        -
      </p>
      <p>{item.qty}</p>
      <p
        onClick={() => addToCart(item, item.size)}
        className={classes.plusMinus}>
        +
      </p>
    </div>
  )
}
