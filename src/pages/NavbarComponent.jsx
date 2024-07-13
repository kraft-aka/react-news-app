import { useContext, useState } from "react";
import {
  Badge,
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { NewsContext } from "../dataProvider/newsDataProvider";

const NavbarComponent = ({ getDataFromQuery }) => {
  const { setCategory, setCountry } = useContext(NewsContext);
  const [inputQuery, setInputQuery] = useState("");

  // gets the input value and passes it the parent component
  const handleInputChange = (e) => {
    setInputQuery(e.target.value);
    getDataFromQuery(inputQuery);
  };

  // scrolls to top 
  const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <Badge bg="danger" className="fs-4">
              News Magazine
            </Badge>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setCategory("general")}>
                General
              </NavDropdown.Item>
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
            </NavDropdown>
            <NavDropdown title="Countries" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setCountry("us")}>
                United States of America
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCountry("de")}>
                Germany
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCountry("kr")}>
                Korea
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCountry("gb")}>
                Greate Britain
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCountry("at")}>
                Austria
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCountry("nl")}>
                the Netherlands
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCountry("tr")}>
                Turkiye
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className="px-3">
            <InputGroup>
              <Form.Control
                placeholder="Search..."
                aria-label="Search..."
                aria-describedby="search"
                onChange={handleInputChange}
                value={inputQuery}
              />
            </InputGroup>
          </Form>
          <Button onClick={goToTop} variant="outline-success">
            Go to top
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
