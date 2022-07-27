import items from '../../data/store-data'
import classes from './items.module.css'
import Item from './item'

function Items() {
  return (
    <div className={classes.items}>
      {items.map((item, index) => (
        <Item item={item} index={index} key={index} />
      ))}
    </div>
  )
}

export default Items
