import React, { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext'
import { Table, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getFirestore } from "../../factory/index";

const Cart = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showMsg, setShowMsg] = useState()
    const message = (msg) => {
        return `Su operacion ha sido ${msg}`
    }

    const { setProduct, cart, removeItem, setCartItems, itemId, setItemId } = useContext(CartContext)

    let totalPrecio = 0
    let totalItem = 0
    const subtotal = (precio, cantidad) => precio * cantidad

    const styles = {
        totalesPrecio: {
            background: 'green',
            color: 'white',
            fontSize: '20px',
            fontWidth: 'bold'
        },
        totalesItems: {
            background: 'white',
            color: 'black',
            fontSize: '20px',
            fontWidth: 'bold'
        },
        titleTable: {
            fontSize: "18px",
            fontWidth: 'bold'
        }
    };







    const saveOrder = () => {

        const db = getFirestore();
        const order = db.collection('orders');
        const newOrder = {
            buyer: {
                email: 'dl@gmail.com',
                name: 'David Lescano',
                phone: '+56989786677'
            },
            date: new Date(),
            total: totalPrecio,

            items: cart.map(({ producto }) => {
                const itemCart = {
                    id: producto.id,
                    price: producto.price,
                    title: producto.title,
                }
                return itemCart
            })


        };
        order
            .add(newOrder)
            .then(({ id }) => {

                console.log(`Elemen to creado. ID: ${id}`);
                setItemId(id)
            })
            .catch(error => {

                console.log(error);
            });
    };

    const updateOrder = id => {
        const db = getFirestore();
        const orderUpdate = db.collection('orders').doc(id);
        console.log(`Actualizamos ${id}`)
        orderUpdate
            .update(

                {
                    date: new Date(),


                    total: totalPrecio,

                    items: cart.map(({ producto, cantidad }) => {
                        const itemCart = {
                            id: producto.id,
                            price: producto.price,
                            title: producto.title,
                            cantidad: cantidad
                        }
                        return itemCart
                    })
                }
            )
            .then(() => {
                console.log("guardado");
            })
            .catch(error => {
                console.log(error);
            });

    }


    

    return (
        <div>
            <h2>Cart</h2>
            {
                (cart.length < 1)
                    ? <Link to="/">
                        <Button variant="info">
                            Agregar producto
                        </Button>
                    </Link>
                    : <>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={styles.titleTable}>Producto</th>
                                    <th style={styles.titleTable}>Precio</th>
                                    <th style={styles.titleTable}>Cantidad</th>
                                    <th style={styles.titleTable}>Total</th>
                                    <th></th>
                                </tr>
                            </thead>


                            {
                                cart.map(({ producto, cantidad }) => {
                                    totalPrecio += subtotal(producto.price, cantidad)

                                    totalItem += cantidad
                                    setCartItems(totalItem)
                                    setProduct(producto)


                                    return (

                                        <tbody key={producto.id} >
                                            <tr>

                                                <td>{producto.title}</td>
                                                <td>${producto.price}</td>
                                                <td>
                                                    {cantidad}
                                                </td>
                                                <td>${subtotal(producto.price, cantidad)}</td>
                                                <td>
                                                    <Link exact to={`/item/${producto.id}`}><Button>Add</Button></Link>
                                                    <Button variant="danger" onClick={() => removeItem(producto.id)}>Delete</Button>
                                                </td>

                                            </tr>

                                        </tbody>

                                    )
                                })
                            }
                            {
                                <tbody>
                                    <tr>
                                        <td style={{ fontSize: "18px" }}>Total de productos:</td>
                                        <td style={styles.totalesItems}> {totalItem}</td>
                                        <td style={{ fontSize: "18px" }}>Costo total:</td>
                                        <td style={styles.totalesPrecio}> ${totalPrecio}</td>
                                        <td>
                                            <Link to="/">
                                                <Button variant="info">
                                                    Agregar producto
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>

                            }

                        </Table>




                        {

                            (itemId !== "")
                                ? <Button variant="light" onClick={() => {
                                    updateOrder(itemId)
                                    handleShow()
                                    setShowMsg("actualizada")
                                }}> Actulizar orden </Button>
                                : <Button onClick={() => {
                                    saveOrder()
                                    handleShow()
                                    setShowMsg("guardada")
                                }}> Guardar orden </Button>


                        }

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header>
                                <Modal.Title variant={'info'}>Operación Exitosa!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {
                                    message(showMsg)
                                }
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Ok
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </>
            }

        </div >
    )
}

export default Cart