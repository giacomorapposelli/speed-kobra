import React, { useState } from 'react'

export const CartContext = React.createContext()

export default function CartProvider({ children }) {
  const [currentCart, setCurrentCart] = useState([])

  const addToCart = (product, size) => {
    product.size = size
    currentCart.push(product)
    const newCart = currentCart.map((item, index) => ({
      ...item,
      id: index,
    }))
    setCurrentCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const removeItem = (itemId) => {
    const items = currentCart.filter((item) => item.id !== itemId)
    setCurrentCart(items)
  }

  return (
    <CartContext.Provider
      value={{
        currentCart,
        addToCart,
        setCurrentCart,
        removeItem,
      }}>
      {children}
    </CartContext.Provider>
  )
}
