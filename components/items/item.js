import React from 'react'
import classes from './items.module.css'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'
import { OverlayContext } from '../../contexts/overlay-context'
import ImageSlider from '../slider/slider'
import Button from '../ui/button'
import ErrorAlert from '../ui/error-alert'

export default function Item({ item }) {
  const [size, setSize] = useState('')
  const [popUp, setPopUp] = useState(false)
  const { addToCart } = useContext(CartContext)
  const { overlay, setOverlay } = useContext(OverlayContext)
  const [error, setError] = useState('')

  const togglePopUp = () => {
    setPopUp(!popUp)
    setOverlay(!overlay)
  }

  const handleAddToCart = (product, size) => {
    setError('')
    if (!product.inStock) {
      setError('This item is sold out')
      return setTimeout(() => setError(''), 2000)
    }
    if (!size) {
      setError('Please select a size/color')
      return setTimeout(() => setError(''), 2000)
    }
    if (product.images.length > 1) {
      product.preview = product.images[product.sizes.indexOf(size)]
    }
    addToCart(product, size)
  }

  return (
    <div key={item.id} className={classes.itemContainer}>
      <div className={classes.itemCard}>
        <div className={classes.itemImg}>
          <Image
            src={item.preview}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            onClick={togglePopUp}
          />
        </div>
        <form>
          <select name="size" onChange={(event) => setSize(event.target.value)}>
            <option value="">
              Choose a {item.type === 'T-Shirt' ? 'size' : 'color'}:
            </option>
            {item.sizes &&
              item.sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
          </select>
          <Button
            onClick={(e) => {
              e.preventDefault()
              handleAddToCart(item, size)
            }}
          >
            Add to cart
          </Button>
        </form>
      </div>
      <div className={classes.description}>
        <p>{item.name}</p>
        <p>{item.type}</p>
        {item.inStock ? <p>Price: {item.price}€</p> : <p>Sold Out</p>}
        {error !== '' && (
          <ErrorAlert className={classes.error}>{error}</ErrorAlert>
        )}
      </div>
      {popUp && <ImageSlider slides={item.images} togglePopUp={togglePopUp} />}
    </div>
  )
}
