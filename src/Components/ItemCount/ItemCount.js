import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import CartContext from '../../Context/CartContext'

const ItemCount = ({ stock, initial, onAdd }) => {

    const {count, setCount } = useContext(CartContext)

    const INITIAL_COUNT = initial || 1
    const STOCKEADO = stock || 10



    const sumarProductos = () => {
        if (count < STOCKEADO) {
            setCount(count + 1);
        }
    }

    const restarProductos = () => {
        if (count > INITIAL_COUNT) {
            setCount(count - 1);
        }
    }


    return (
        <div>

            <small> Stock: {STOCKEADO - count} </small>
            <p>{count}</p>

            <Button onClick={() => restarProductos()}
                variant="light" disabled={count <= 1}>-</Button>

            <Button onClick={() => sumarProductos()}
                variant="light">+</Button>

            <hr />

            <Button variant="primary" onClick={()=>onAdd(count)}>Agregar al carrito</Button>


        </div>
    )
}

export default ItemCount

