import {CardGroup,Card,Row,Col} from 'react-bootstrap';
import { useEffect } from 'react';
import '../Header/Header.css'
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import {Carousel} from "react-bootstrap";
import './home.css';
import Footer from '../Footer/Footer';


const UserHome= () =>{
  
  useEffect(() => {
    document.title = 'CA || HOME PAGE';
  });

    return(
        <>
      <div className="header_navbar">
        <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="/" style={{color:"white"}}>Connecting Alumnus</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/user/home" style={{color:"white"}}>Home</Nav.Link>
            <NavDropdown title="Facilities" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user/cafes">Cafe and Restaurants</NavDropdown.Item>
              <NavDropdown.Item href="/user/hotels">Hotels</NavDropdown.Item>
              <NavDropdown.Item href="/travels">Travels and Tours</NavDropdown.Item>
              <NavDropdown.Item href="/user/jobs">Jobs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/moreInfo">More...</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/members" style={{color:"white"}}>Members</Nav.Link>
            <Nav.Link href="/gallery" style={{color:"white"}}>Gallery</Nav.Link>
            <Nav.Link href="/user/post" style={{color:"white"}}>Posts</Nav.Link>
            <Nav.Link href="/about" style={{color:"white"}}>About Us</Nav.Link>
            <Nav.Link href="/contact" style={{color:"white"}}>Contact Us</Nav.Link>
          </Nav>
          <Nav>
          <Navbar.Brand style={{color:"white"}}> Welcome </Navbar.Brand>
            <NavDropdown title="More Info" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
        <div className="header">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/5212341/pexels-photo-5212341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/5076529/pexels-photo-5076529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <CardGroup>
        <Card>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardGroup>
    <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/5076529/pexels-photo-5076529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
    <Footer/>
    </>
    );
};
export default UserHome;
