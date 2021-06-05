import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <>
            <Navbar bg="light" className="justify-content-around">
                <Navbar.Brand href="#">
                    <h1 id="Brand">LeTul</h1>
                </Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search..." className="mr-sm-2"/>
                    <Button className="btn btn-info">Search</Button>
                </Form>
                <Navbar>
                    <Nav className="md-lg">
                        <Nav.Link href="#" className="ItemNav">Login</Nav.Link>
                        <Nav.Link href="#" className="ItemNav">
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </Navbar>
            <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
                <Nav className="md-lg">
                    <Nav.Link href="#" className="ItemNav">Más vendidos</Nav.Link>
                    <Nav.Link href="#" className="ItemNav">Ofertas</Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown" className="ItemNav">
                        <NavDropdown.Item href="#">
                            <p>Cremas</p>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            <p>Óleos</p>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            <p>Fragancias</p>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                            <p>Todos</p>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar
