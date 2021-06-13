import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Item = ({ title, price, pictureURL })  => {

    const onAdd = ( cantidad ) =>{
        console.log(`Cantidad de productos: ${cantidad}`)
      }

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center Cards">
                    <Col xs lg="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pictureURL} />                           
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    <strong>${price}</strong>
                                </Card.Text>
                                <Button variant="primary" >Ver más</Button>              
                            </Card.Body>
                        </Card>
                    </Col>                 
           
                </Row>              
               
            </Container>
        </div>
    )
}

export default Item