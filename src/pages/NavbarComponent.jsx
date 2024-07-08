import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            News{" "}
            <Badge bg="danger" className="fs-4">
              Magazine
            </Badge>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
