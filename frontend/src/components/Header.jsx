import React from 'react'
import {Navbar, Nav , Container} from 'react-bootstrap';
import {FaUser, FaShoppingCart} from 'react-icons/fa';
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">
                <img src={logo} alt='ProShop' ></img>
                ProShop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
                        <Nav.Link href='/login'><FaUser />Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
