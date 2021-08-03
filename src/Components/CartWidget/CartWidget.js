import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './CartWidget.css'


function CartWidget() {

    const { cart, cartItems } = useContext(CartContext)


    return (
        <div>
            <i class="fas fa-shopping-cart">

                {
                    (cartItems >= 1 && cart.length >= 1)
                    ? <small className='items'>{cartItems}</small>
                    : <small></small>
                }
                
                
            </i>
        </div>
    )

   
}

export default CartWidget
