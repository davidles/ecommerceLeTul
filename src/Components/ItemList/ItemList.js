import React, { useContext } from 'react'
import Item from '../Item/Item'
import { Container, Row, Col } from 'react-bootstrap';
import CartContext from '../../Context/CartContext';

const ItemList = () => {
    const { categories } = useContext(CartContext)
 console.log(categories)

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center Cards">
                    {
                        categories.map((item, i) => {
                            console.log(item.id)
                            return (

                                <Col xs lg="auto">
                                    <Item key={item.id} id={item.id} title={item.title} category={item.category} price={item.price} pictureURL={item.pictureURL} stock={item.stock}/>
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