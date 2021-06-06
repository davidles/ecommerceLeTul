import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const ItemCount = ({ stock, initial, onAdd }) => {

    const INITIAL_COUNT = initial || 1
    const STOCKEADO = stock || 10


    const [count, setCount] = useState(INITIAL_COUNT)


    const sumarProductos = () => {
        if (count < STOCKEADO) {
            setCount(count + 1);

        } else {
            setCount(STOCKEADO)

        } 
    }

    const restarProductos = () => {
        if (count > INITIAL_COUNT) {
            setCount(count - 1);


        } else {
            setCount(count)
        }
    }



    return (
        <div>
            <h4>#Productos</h4>
            <small> Stock: {STOCKEADO - count} </small>
            <p>{count}</p>

            <Button onClick={() => restarProductos()}
                variant="light">-</Button>

            <Button onClick={() => sumarProductos()}
                variant="light">+</Button>

            <hr />

            <Button variant="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>

        </div>
    )
}

export default ItemCount


