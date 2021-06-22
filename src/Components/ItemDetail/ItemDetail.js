import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {

const [ showButton, setShowButton] = useState(true)

const onAdd = (quantityToAdd) =>{
    setShowButton(false)
    let cantidad = quantityToAdd
    let producto = item.title
    console.log("Producto: "+ producto + ", Cantidad: "+ cantidad)
}


    return (
        <Container>
            <Row>
                <Col xs={6} md={6}>
                    <Image src={item.pictureURL || "https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103595_960_720.png"} thumbnail />
                </Col>

                <Col xs={6} md={6}>               
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                        <Card.Text>{item.description}</Card.Text>
                        <p>Precio ${item.price}</p>
                        {
                            showButton ? <ItemCount onAdd={onAdd}/> : <Link exact to ={`/cart`}>
                            <Button variant="primary">Terminar la compra</Button>
                           </Link>
                        }
                        
                         
                    </Card.Body>              
                </Col>

     
            </Row>
        </Container>
    )
}

export default ItemDetail