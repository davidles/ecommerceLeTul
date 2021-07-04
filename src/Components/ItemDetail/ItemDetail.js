import React, { useContext, useState } from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext';

const ItemDetail = () => {

    const { product, count, addItem, removeItem, clear } = useContext(CartContext)


    const [ showButton, setShowButton] = useState(true)

    const onAdd = (quantityToAdd) =>{
        setShowButton(false)
        let cantidad = quantityToAdd
        let producto = product.title
        console.log("Producto: "+ producto + ", Cantidad: "+ cantidad )
    }

    

    return (
        <Container>
            <Row>
                <Col xs={6} md={6}>
                    <Image src={product.pictureURL || "https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103595_960_720.png"} thumbnail />
                </Col>

                <Col xs={6} md={6}>               
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
                        <Card.Text>{product.description}</Card.Text>
                        <p>Precio ${product.price}</p>
                        {
                            showButton ? <ItemCount onAdd={onAdd}/> : <Link exact to ={`/cart`}>
                            <Button variant="primary" onClick={x => addItem(product, count)} >Terminar la compra</Button>
                           </Link>
                        }
                        <hr/>
                        <Button variant="primary" onClick={x => removeItem()}>
                            Eliminar producto
                        </Button>
                        <hr/>
                        <Button variant="primary" onClick={x => clear()}>
                            Limpiar
                        </Button>
                         
                    </Card.Body>              
                </Col>

     
            </Row>
        </Container>
    )
}

export default ItemDetail