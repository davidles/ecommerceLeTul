import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext';

import './Item.css'

const Item = ({ id, title, price, pictureURL,  category })  => {

   

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center Cards">
                    <Col xs lg="auto">
                        <Card style={{ width: '18rem' }} className="cards">
                            <Card.Img variant="top" src={pictureURL} />                           
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    <p>${category}</p>
                                </Card.Text>
                                <Card.Text>
                                    <strong>${price}</strong>
                                </Card.Text>
                                <Link exact to ={`/item/${id}`}>
                                 <Button variant="primary">Ver más</Button>
                                </Link>
                                              
                            </Card.Body>
                        </Card>
                    </Col>                 
           
                </Row>              
               
            </Container>
        </div>
    )
}

export default Item