import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (
        <>
            <Navbar bg="light" className="justify-content-center">
                <Navbar.Brand href="#">
                    <h1>LeTul</h1>
                </Navbar.Brand>
            </Navbar>
            <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
                <Nav className="md-lg">
                    <Nav.Link href="#">Más vendidos</Nav.Link>
                    <Nav.Link href="#">Ofertas</Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
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
