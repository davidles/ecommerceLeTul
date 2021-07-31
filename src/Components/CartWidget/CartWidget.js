import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './CartWidget.css'


function CartWidget() {

    const { cart, cartItems } = useContext(CartContext)


    return (
        <div>
            <i className="fas fa-shopping-bag">

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
