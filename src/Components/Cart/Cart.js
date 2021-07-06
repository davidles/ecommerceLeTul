import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { product, setProduct, cart, items, setItems, removeItem, clear, count, sumaItems } = useContext(CartContext)

    const productSelected = cart.map(prodSelected => {
        const { producto, cantidad } = prodSelected

        return { producto, cantidad }
    })

    const subtotal = (precio, cantidad) => precio*cantidad

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
                            productSelected.map(({ producto, cantidad }) => (

                                <tbody key={producto.id}>
                                    <tr>
                                        <td>{producto.title}</td>
                                        <td>${producto.price}</td>
                                        <td>{cantidad}</td>
                                        <td>${subtotal(producto.price, cantidad)}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => removeItem(producto.id)}>Eliminar</Button>
                                        </td>
                                    </tr>
                                </tbody>

                            ))

                        }
                        < tbody >
                            <tr>
                                <td>Total de productos: {sumaItems}</td>
                            </tr>
                        </tbody>
                    </Table>


            }
        </div >
    )
}

export default Cart

/***
 * <Table striped bordered hover>
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
                    productSelected.map(({ producto, cantidad }) => (

                        <tbody key={producto.id}>
                            <tr>
                                <td>{producto.title}</td>
                                <td>${producto.price}</td>
                                <td>{cantidad}</td>
                                <td>${subtotal(producto.price, cantidad)}</td>
                                <td>
                                    <Button variant="danger" onClick={() => removeItem(producto.id)}>Eliminar</Button>
                                </td>
                            </tr>
                        </tbody>

                    ))
                }

            </Table>
 */