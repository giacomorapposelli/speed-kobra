import Image from 'next/image'
import { CartContext } from '../../contexts/cart-context'
import deleteIcon from '../../public/icons/delete.png'
import { useContext } from 'react'
import classes from './cart.module.css'
import Quantityelect from './quantity-select'

function CartItem({ item, className }) {
  const { removeItem } = useContext(CartContext)

  return (
    <div
      key={item.id}
      className={`${classes.cartItem} ${className || ''}`}
      id={item.id}
    >
      <div className={classes.smallImg}>
        <Image src={item.preview} objectFit="cover" layout="fill" />
      </div>
      <p className={classes.itemName}>
        {item.name} {item.type}
      </p>
      <p className={classes.itemDesc}>{item.size}</p>
      <Quantityelect qty={item.qty} item={item} />
      <p className={classes.itemDesc}>{item.price * item.qty}€</p>
      <div
        className={classes.deleteIcon}
        id={item.id}
        onClick={() => removeItem(item.index)}
      >
        <Image src={deleteIcon} alt="delete" />
      </div>
    </div>
  )
}

export default CartItem
