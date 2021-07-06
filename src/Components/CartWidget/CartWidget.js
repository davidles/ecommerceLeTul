import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'


function CartWidget() {

    const { sumaItems } = useContext(CartContext)

    const styles = {
        items: {
          background: '#4297ad',
          padding: '3px',
          fontSize: '12px',
          borderRadius: '5px',
          color:'white',
          border: '1px solid black'
        },
        widget: {
            color: 'black'
        }
      };

    return (
        <div>
            <i className="fas fa-shopping-bag" style={styles.widget}>
                {
                    (sumaItems >= 1)
                    ? <small style={styles.items}>{ sumaItems }</small>
                    : <small></small>
                }
            </i>
        </div>
    )
}

export default CartWidget
