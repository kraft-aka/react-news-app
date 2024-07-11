import { useContext } from "react";
import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NewsContext } from "../dataProvider/newsDataProvider";

const NavbarComponent = () => {
  const { setCategory } = useContext(NewsContext);
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
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setCategory("business")}>
                Business
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCategory("entertainment")}>
                Entertainment
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCategory("sports")}>
                Sports
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCategory("health")}>
                Health
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCategory("science")}>
                Science
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCategory("technology")}>
                Technology
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
