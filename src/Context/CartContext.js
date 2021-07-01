import React, { useState } from 'react'

 const CartContext = React.createContext({})
 

 export function CartContextProvider({children}){
     const initialState = []
     const [cart, setCart] = useState(initialState);
     const [product, setProduct] = useState([]);
     const [count, setCount] = useState(1);

     const isInCart = cart.find( x => x.producto.id === product.id)


     function addItem(item, quantity){

        

        if (isInCart) {
            let nuevaCant = isInCart.cantidad + count;
            let posicion = cart.indexOf(isInCart);
            cart[posicion].cantidad = nuevaCant;
            setCart(cart);
            
          } else {
            setCart([...cart, { producto: item, cantidad: quantity }]);
          }
          console.log(cart)
        

    }

    function removeItem(itemId){
        console.log("itemId")
    }

    function clear(){
        console.log("limpiar")
    }

    

    return(
        <CartContext.Provider value={{ product, setProduct, cart, setCart, count, setCount, addItem, removeItem, clear  }}>
            {children}
        </CartContext.Provider>
    )



 }


export default CartContext;


/***
 *        
    function addItem(item, quantity){
        const isInCart = cart.find( x => x.producto.id === product.id)

        if (isInCart) {
            let nuevaCant = isInCart.quantity + count;
            let posicion = cart.indexOf(isInCart);
            cart[posicion].cantidad = nuevaCant;
            setCart(cart);
            
          } else {
            setCart([...cart, { producto: item, cantidad: quantity }]);
          }
          console.log(cart)

    }
 */