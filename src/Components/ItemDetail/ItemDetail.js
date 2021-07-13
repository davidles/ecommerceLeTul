import React, { useContext, useState } from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext';

const ItemDetail = () => {

    const { product, count, addItem, removeItem, clear, items, setItems } = useContext(CartContext)


    const [showButton, setShowButton] = useState(true)

    let suma = 0
    const onAdd = (quantityToAdd) => {
        setShowButton(false)
        const itemSelected = { product, quantityToAdd }

        return { itemSelected }
    }







    return (
        <Container>
            
                {
                    items.map((item) => {
                        return(
                            <Row key={item.id}>
                            <Col xs={6} md={6}>
                            <Image src={item.pictureURL || "https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103595_960_720.png"} thumbnail />
                        </Col>
        
                        <Col xs={6} md={6}>               
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
                                <Card.Text>{item.description}</Card.Text>
                                <p>Precio ${item.price}</p>
                                {
                                    showButton ? <ItemCount onAdd={onAdd}/> : <Link exact to ={`/cart`}>
                                    <Button variant="primary" onClick={x => addItem(item, count)} >Terminar la compra</Button>
                                   </Link>
                                }
                                 
                            </Card.Body>              
                        </Col>
                        </Row>
                        )
                    })
                }


           
        </Container>
    )
}

export default ItemDetail