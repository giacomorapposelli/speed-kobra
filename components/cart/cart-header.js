import classes from './cart.module.css'

export default function CartHeader() {
  return (
    <div className={classes.cartHeader}>
      <div></div>
      <p className={classes.itemName}>PRODUCT</p>
      <p className={classes.itemDesc}>SIZE/COLOR</p>
      <p className={classes.itemDesc}>QTY</p>
      <p className={classes.itemDesc}>PRICE</p>
      <div></div>
    </div>
  )
}
