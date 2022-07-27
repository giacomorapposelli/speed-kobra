import Image from 'next/image'
import { CartContext } from '../../contexts/cart-context'
import deleteIcon from '../../public/icons/delete.png'
import { useContext } from 'react'
import classes from './cart.module.css'

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
      <p className={classes.itemDesc}>
        {item.type === 'LP' || item.type === 'Tape' ? 'Color' : 'Size'}:{' '}
        {item.size}
      </p>
      <p className={classes.itemDesc}>Price: {item.price}€</p>
      <div
        className={classes.deleteIcon}
        id={item.id}
        onClick={() => removeItem(item.id)}
      >
        <Image src={deleteIcon} alt="delete" height={30} width={30} />
      </div>
    </div>
  )
}

export default CartItem
