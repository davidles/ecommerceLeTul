import React, { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Cart = ({ onAdd }) => {

    const {  cart, setCart, addItem, removeItem, clear, cartItems, setCartItems } = useContext(CartContext)

    const subtotal = (precio, cantidad) => precio * cantidad

    
    

    let totalPrecio=0
    let totalItem=0

    

    const styles = {
        totalesPrecio: {
          background: 'green',
          color:'white'
        },
        totalesItems: {
            background: 'grey',
            color:'black'
          }
      };


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
                                    setCartItems( totalItem )
                                    console.log(cartItems)
                                return(

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
                                    <td style={styles.totalesItems}>Total de productos: {totalItem}</td>
                                    <td style={styles.totalesPrecio}>Total de productos: ${totalPrecio}</td>
                                </tr>
                            </tbody>

                        }
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




            /***
             * 
             * <tbody key={producto.id} >
                                    <tr>
                                        <td>{producto.title}</td>
                                        <td>${producto.price}</td>
                                        <td>{cantidad}</td>
                                        <td>${subtotal(producto.price, cantidad)}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => removeItem(producto.id)}>Eliminar</Button>
                                        </td>
                                        <td>
                                            {suma(cantidad)}
                                        </td>
                                    </tr>
                                </tbody>
             */


                                /***
                                 * 
                                 * 
                                 *             const isInCart = cart.find(x => x.producto.id === producto.id)
                                let posicion = cart.indexOf(isInCart);
                                console.log("posicion "+ posicion)
                                const cantidades = cart.map(x => cart[posicion].cantidad)
                                const resultado = suma(cantidades)
                                console.log(resultado)
                                 */