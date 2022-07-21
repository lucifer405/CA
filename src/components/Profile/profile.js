import React from "react";
import { useEffect } from "react";
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import '../Header/Header.css';
import './profile.css'
import CTabs from './tabs.js';
const Profile = () => {
    useEffect(() => {
        document.title = 'CA || PROFILE PAGE';
      });
    return (
        <>
            <div className="header_navbar">
                <Navbar sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="/" style={{ color: "white" }}>Connecting Alumnus</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/home" style={{ color: "white" }}>Home</Nav.Link>
                                <NavDropdown title="Facilities" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/cafes">Cafe and Restaurants</NavDropdown.Item>
                                    <NavDropdown.Item href="/hotels">Hotels</NavDropdown.Item>
                                    <NavDropdown.Item href="/travels">Travels and Tours</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/moreInfo">More...</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/members" style={{ color: "white" }}>Members</Nav.Link>
                                <Nav.Link href="/gallery" style={{ color: "white" }}>Gallery</Nav.Link>
                                <Nav.Link href="/post" style={{ color: "white" }}>Posts</Nav.Link>
                                <Nav.Link href="/about" style={{ color: "white" }}>About Us</Nav.Link>
                                <Nav.Link href="/contact" style={{ color: "white" }}>Contact Us</Nav.Link>
                            </Nav>
                            <Nav>
                                <Navbar.Brand style={{ color: "white" }}> Welcome </Navbar.Brand>
                                <NavDropdown title="More Info" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/user/profile">My Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="background">
                <div className="col-md-5 border-right">
                    <div className="p-5 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="t font">Profile Settings</h4>
                        </div>
                        <div ><CTabs /></div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile; 