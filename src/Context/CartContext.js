import React, { useState } from 'react'

const CartContext = React.createContext({})


export function CartContextProvider({ children }) {
  const initialState = []
  const [cart, setCart] = useState(initialState);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [ items, setItems ] = useState([])
  const [ TotalCosto, updateTotalCosto] = useState([])

  const sumaItems = items.reduce((acumulado, total) => acumulado + total, 0)

  const subtotal = (precio, cantidad) => {
    const totalProducto = precio * cantidad

    updateTotalCosto([...TotalCosto, totalProducto])

    return totalProducto
}



  const addItem = (item, quantity) => {
    const isInCart = cart.find(x => x.producto.id === product.id)
    if (isInCart) {

      let nuevaCant = isInCart.cantidad + count;
      let posicion = cart.indexOf(isInCart);
      cart[posicion].cantidad = nuevaCant;
      console.log(nuevaCant)
    
      setCart(cart);

      setItems([nuevaCant])
    

    } else {
      
      setCart([...cart, { producto: item, cantidad: quantity }]);
      setItems([...items, count])  

    }
  }

  function removeItem(itemId) {
    const isInCart = cart.find(x => x.producto.id === itemId)
    let posicion = cart.indexOf(isInCart)
    cart.splice(posicion, 1)
    items.splice(posicion, 1)
    setCart([...cart])
    setItems([...items])

  }

  function clear() {
    setCart(initialState)
  }



  // console.log(cart)
  // console.log(items)
  // console.log(sumaItems)

  return (
    <CartContext.Provider value={{ product, setProduct, cart, setCart, count, setCount, addItem, removeItem, clear, items, setItems, sumaItems, subtotal }}>
      {children}
    </CartContext.Provider>
  )



}


export default CartContext;


