import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavItem,NavLink,NavbarBrand} from 'react-bootstrap';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const NavbarComp = () => {
    return (
        <>
        <Navbar  bg="dark" variant="dark">
            <NavbarBrand className="ml-5 fontSize-title">
            <Link className="linkStyle" to="/">Game Store</Link>
            </NavbarBrand>
            <Nav className="ml-auto">
            <NavItem className="mx-2 fontSize">
                <NavLink>
                    <Link className="linkStyle" to="/">Home</Link>
                </NavLink>
            </NavItem>
            <NavItem className="mx-2 fontSize">
                <NavLink>
                    <Link className="linkStyle" to="/create">Create</Link>
                </NavLink>
            </NavItem>
            <NavItem className="ml-2 mr-5 fontSize">
                <NavLink>
                    <Link className="linkStyle" to="/about">About</Link>
                </NavLink>
            </NavItem>
            </Nav>
        </Navbar>
            
        </>
    )
}

export default NavbarComp
