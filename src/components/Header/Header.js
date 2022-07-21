import React from "react";
import './Header.css'
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
const Header= () =>{
    return(
      <div className="header_navbar">
        <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container>
        <Navbar className="text" href="/">
          
          Connecting Alumnus
          </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="/pricing" style={{color:'white'}}>About Us</Nav.Link>
            <NavDropdown style={{color:'white'}} title="More" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="/action/3.1" style={{color:'black'}}>Gallery</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.2" style={{color:'black'}}>Posts</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.3" style={{color:'black'}}>Notice</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/action/3.4" style={{color:'black'}}>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/signup" style={{color:'white'}}>SIGN UP</Nav.Link>
            <Nav.Link eventKey={2} href="/user/login" style={{color:'white'}}>
              USER LOG IN
            </Nav.Link>
            <Nav.Link eventKey={2} href="/admin/login" style={{color:'white'}}>
              ADMIN LOG IN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  );
}
export default Header;