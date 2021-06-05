import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Cards() {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center Cards">
                    <Col xs lg="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://swissjust-platform.s3.amazonaws.com/06181318074.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                      
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://swissjust-platform.s3.amazonaws.com/08075316063.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://swissjust-platform.s3.amazonaws.com/06184057104.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="justify-content-md-center Cards">
                    <Col xs lg="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://swissjust-platform.s3.amazonaws.com/06210319872.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                      
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://swissjust-platform.s3.amazonaws.com/06182831380.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://swissjust-platform.s3.amazonaws.com/06132415737.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
               
            </Container>
        </div>
    )
}

export default Cards
