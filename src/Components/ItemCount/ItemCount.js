import React, { useContext } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
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
            
            <Row>
                <Col md={5}>
                    <Button onClick={() => restarProductos()}
                    variant="light" disabled={count <= 1}>-</Button>
                </Col>
                <Col md={2}>
                    <p>{count}</p>
                </Col>
                <Col md={5}>
                    <Button onClick={() => sumarProductos()}
                        variant="light">+</Button>
                </Col>
            </Row>
            

            
                

            

            <hr />

            <Button variant="primary" onClick={()=>onAdd(count)}>Agregar al carrito</Button>


        </div>
    )
}

export default ItemCount

