import React from 'react'
import Item from '../Item/Item'
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = ({ items }) => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center Cards">
                    {
                        items.map((item, i) => {
                            return (

                                <Col xs lg="auto">
                                    <Item key={item.id} title={item.title} price={item.price} pictureURL={item.pictureURL} stock={item.stock}/>
                                </Col>



                            )

                        })
                    }
                </Row>

            </Container>
        </div>
    )
}

export default ItemList


/**
 *  <Item key={product.id} title={product.title} price={product.price} pictureURL={product.pictureURL}/>
 */