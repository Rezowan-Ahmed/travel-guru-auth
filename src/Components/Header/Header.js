import React from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import './Header.css';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="container">
            <Navbar>
                <Navbar.Brand  className="w-25" style={{height:"50px"}}><img className="img" src={logo} style={{height: '50px', filter: "brightness(800%)"}} alt="Web Logo"/>
                </Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search your destination"  style={{width: "320px"}}/>
                </Form>
                <Nav className="mr-auto">
                    <Nav.Link><Link to='/news' className="nav_list" id="news">News</Link></Nav.Link>
                    <Nav.Link><Link to='/destination' className="text-white">Destination</Link></Nav.Link>
                    <Nav.Link><Link to='blog' className="text-white">Blog</Link></Nav.Link>
                    <Nav.Link><Link to='contact' className="text-white">Contact</Link></Nav.Link>
                    <button className='btn'  style={{background: "orange", padding: "10px 30px", borderRadius: "7px"}}>Login</button>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;