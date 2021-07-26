import React, { useContext, useState, useEffect } from 'react'
import CartContext from '../../Context/CartContext'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getFirestore } from "../../factory/index";
import * as firebase from 'firebase/app';


const Cart = () => {

    const { product, setProduct, cart, setCart, addItem, removeItem, clear, cartItems, setCartItems, itemId, setItemId } = useContext(CartContext)

    let totalPrecio = 0
    let totalItem = 0
    const subtotal = (precio, cantidad) => precio * cantidad

    // const [ totalPrice, setTotalPrice ] = useState(0)

   

    const styles = {
        totalesPrecio: {
            background: 'green',
            color: 'white'
        },
        totalesItems: {
            background: 'grey',
            color: 'black'
        }
    };

    /**************************************** */



    const [loading, setLoading] = useState(false);
    const saveOrder = () => {
        setLoading(true);
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

            items: cart.map( ({producto}) => {
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
                setLoading(false);
                console.log(`Elemen to creado. ID: ${id}`);
                setItemId(id)
            })
            .catch(error => {
                setLoading(false);
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

                    items: [...cart]
                }
            )
            .then(() => {
                setLoading(false);;
            })
            .catch(error => {
                console.log(error);
            });

        console.log("Actualizada")
    }



    console.log(itemId)
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
                    : <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
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
                                    <td>Compra</td>
                                    <td style={styles.totalesItems}>Total de productos: {totalItem}</td>
                                    <td style={styles.totalesPrecio}>Total de productos: ${totalPrecio}</td>
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


            }
            <Button onClick={() => saveOrder()}> Guardar orden </Button>
            <Button variant="light" onClick={() => updateOrder(itemId)}> Actulizar orden </Button>
        </div >
    )
}

export default Cart