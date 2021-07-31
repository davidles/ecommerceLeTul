import React, { useContext } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import CartContext from '../../Context/CartContext'

const ItemCount = ({ onAdd }) => {

    const { count, setCount } = useContext(CartContext)

    const sumarProductos = () => {
        setCount(count + 1);
    }

    const restarProductos = () => {
        setCount(count - 1);
    }


    return (
        <div>
            
            <Row>
                <Col md={5}>
                    <Button onClick={() => restarProductos()}
                    variant="light" disabled={count <= 1}>-</Button>
                </Col>
                <Col md={2}>
                    <p>{count}</p>
                </Col>
                <Col md={5}>
                    <Button onClick={() => sumarProductos(count)}
                        variant="light">+</Button>
                </Col>
            </Row>
            

            
                

            

            <hr />

            <Button variant="primary" onClick={()=>onAdd(count)}>Agregar al carrito</Button>


        </div>
    )
}

export default ItemCount

