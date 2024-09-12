import React from 'react'
import { Col, Container, Nav, NavDropdown, Navbar, NavbarCollapse, Row } from 'react-bootstrap'

function MyNav() {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Navbar fixed='top' variant='dark' bg='dark' expand='md'>&nbsp;
                                <Navbar.Brand href='#'>
                                    <img src='logo192.png'
                                        height='50' width='50'
                                        className='align-center' />&nbsp;
                                    My Website
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls='my-nav' />
                                {/* Jo navbar toggle aria controls mai class dengy wohi navbar collapse mai dngy*/}
                                <Navbar.Collapse id='my-nav'>
                                    <Nav className='me-auto px-5 fw-bold '>
                                        <Nav.Link href='#'>Home</Nav.Link>
                                        <Nav.Link href='#'>About</Nav.Link>
                                        <NavDropdown title='Services' id='my-nav'>
                                            <NavDropdown.Header>Basic Service</NavDropdown.Header>
                                            <NavDropdown.Item href='#'>Service 1</NavDropdown.Item>
                                            <NavDropdown.Item href='#'>Service 2</NavDropdown.Item>
                                            <NavDropdown.Header>Home Service</NavDropdown.Header>
                                            <NavDropdown.Item href='#'>Service 3</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href='#'>Contact</Nav.Link>
                                    </Nav>
                                    <Navbar.Text className='px-5 '>
                                        Sign In Here <a className='text-primary' href='#'>Login</a>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae vero ad omnis illo modi maxime voluptate nemo atque deserunt amet velit ipsam, laborum, sapiente quia! Laboriosam culpa fugiat qui.</h3>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default MyNav
