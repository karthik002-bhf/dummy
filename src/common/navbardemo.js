import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarDemo() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="#">
          <div className='' style={{ width: '100px' }}>
            <Image src='https://d3f1ozwy5sre8y.cloudfront.net/2024-02/navsmlimg.png?VersionId=B.Iwt.bRgrVlvFBEKM49FAknpkQh4.1z&format=webp&width=640&quality=75' className='w-100' />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Express painting</Nav.Link>
            <Nav.Link href="#action2">Waterproofing</Nav.Link>
            <Nav.Link href="#action3">Products</Nav.Link>
            <Nav.Link href="#action4">Colour</Nav.Link>
            <Nav.Link href="#action5">Inspiration</Nav.Link>
            <Nav.Link href="#action6">Tools</Nav.Link>
            <Nav.Link href="#action7">Support</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDemo;