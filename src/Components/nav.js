import React from "react";
import "../css/nav.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

function NavBar() {
  return (
    <div className="Nav px-lg-5">
      <Navbar collapseOnSelect expand="lg" bg="" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://codeable.io/wp-content-new/uploads/2019/10/codeable-logo.svg"
              class="navImg"
              alt="navBrand"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto mt-2 mt-lg-0 me-auto mb-2 mb-lg-0">
              <Nav.Link href="#" className="link">
                HOW IT WORKS
              </Nav.Link>
              <NavDropdown title="WHO WE HELP" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Business Owners</NavDropdown.Item>
                <NavDropdown.Item href="#">Agencies</NavDropdown.Item>
                <NavDropdown.Item href="#">Freelancers</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" id="dev">
                DEVELOPERS
              </Nav.Link>
              <Nav.Link href="#" className="link">
                WHY
              </Nav.Link>
              <Nav.Link href="#" className="link">
                PRICING
              </Nav.Link>

              <NavDropdown title="PARTNERS" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Partner Program</NavDropdown.Item>
                <NavDropdown.Item href="#">Affiliate Program</NavDropdown.Item>
                <NavDropdown.Item href="#">Partner Directory</NavDropdown.Item>
                <NavDropdown.Item href="#">Affiliate Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button
                variant="outline-succes"
                size="lg"
                id="btn1"
                className="ml-sm-5"
              >
                LOGIN
              </Button>
              <Button variant="outline-succes" size="lg" id="btn2">
                START A PROJECT
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
