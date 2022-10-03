import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/join.css";
function Join() {
  return (
    <div className="join">
      <Container>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8} className="center">
            <h1 className="join1">
              Join the network of world’s best WordPress developers.
            </h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="center">
            <Button size="lg" variant="outline-success" id="butn">
              APPLY AS AN EXPERT
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Join;
