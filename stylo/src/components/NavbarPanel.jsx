import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const NavbarPanel = () => {

  const cartProducts=useSelector(state=>state.cart)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Stylo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link to="/dashboard" as={Link}>
            Product
          </Nav.Link>
          
        </Nav>
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              My Bag {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPanel;
