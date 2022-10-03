import React from "react";
import "../css/search.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
function Search() {
  return (
    <Container id="sr">
      <Row>
        <Col lg={3} md={4} className="search">
          <input className="sinput" type="text" placeholder="Search"></input>
          <Button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
              alt="search"
              width="20px"
            />
          </Button>
        </Col>
        <Row>
          <Col className="results">
            <p>Showing 495 results</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Search;
