import React, { useState } from 'react'

export const CartContext = React.createContext()

export default function CartProvider({ children }) {
  const [currentCart, setCurrentCart] = useState([])

  const addToCart = (product, size) => {
    const itemExists = currentCart.find(
      item => item.id === product.id && item.size === size
    )
    if (itemExists) {
      setCurrentCart(
        currentCart.map((item, index) =>
          item.id === product.id && item.size === size
            ? { ...itemExists, qty: itemExists.qty + 1, index }
            : { ...item, index }
        )
      )
    } else {
      setCurrentCart([...currentCart, { ...product, size, qty: 1 }])
    }
    console.log(currentCart)
    localStorage.setItem('cart', JSON.stringify(currentCart))
  }

  const decreaseQuantity = product => {
    const existingItem = currentCart.find(
      item => item.id === product.id && item.size === product.size
    )
    if (existingItem && existingItem.qty > 1) {
      setCurrentCart(
        currentCart.map((item, index) =>
          item.id === product.id && item.size === product.size
            ? { ...existingItem, qty: existingItem.qty - 1, index }
            : { ...item, index }
        )
      )
    } else {
      removeItem(product.index)
    }
  }

  const removeItem = itemIndex => {
    const newCart = currentCart.filter(item => item.index !== itemIndex)
    setCurrentCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        currentCart,
        addToCart,
        setCurrentCart,
        removeItem,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
