import React from "react";
import "../css/community.css";
import { Container, Row, Col } from "react-bootstrap";
function Community() {
  return (
    <div className="community">
      <Container>
        <Row>
          <Col lg={2} className="d-none d-lg-block"></Col>
          <Col lg={8} className="text-center">
            <h1 className="com1">
              Our community of elite WordPress development experts
            </h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={3} className="d-none d-lg-block"></Col>
          <Col lg={6} className="text-center">
            <p className="com2">
              We’ve designed a rigorous vetting process that ensures you only
              work with the best possible WordPress talent.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Community;
