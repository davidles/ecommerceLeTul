import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {


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
                        <ItemCount/>
                    </Card.Body>              
                </Col>

     
            </Row>
        </Container>
    )
}

export default ItemDetail