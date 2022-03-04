import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../ReactNavbar/ReactNavbar";

function ReactNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="my-site-navbar">
      <Container>
        <Navbar.Brand href="#home">Hunger Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Cart" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Food Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bookmark Restro
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Favourite</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Signup</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ReactNavbar;
