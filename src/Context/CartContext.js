import React, { useState } from 'react'

const CartContext = React.createContext({})


export function CartContextProvider({ children }) {
  const initialState = []
  const [cart, setCart] = useState(initialState);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);

 
 


const addItem = (item, quantity) => {
 const isInCart = cart.find(x => x.producto.id === product.id)
  
  if (isInCart) {

    let nuevaCant = isInCart.cantidad + count;

    let posicion = cart.indexOf(isInCart);

    cart[posicion].cantidad = nuevaCant;
      
    setCart(cart);


  } else {
    
    setCart([...cart, { producto: item, cantidad: quantity }]);

  }
}

  function removeItem(itemId) {
    const isInCart = cart.find(x => x.producto.id === itemId)
    let posicion = cart.indexOf(isInCart)
    cart.splice(posicion, 1)
    setCart([...cart])


  }

  function clear() {
    setCart(initialState)
  }

console.log(cart)



  return (
    <CartContext.Provider value={{ product, setProduct, cart, setCart, count, setCount, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  )



}


export default CartContext;


/***
 *   
 */