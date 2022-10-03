import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/footer.css";
function Footer() {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Col className="center">
            <ul>
              <li>
                <p>2021 © Codeable</p>
              </li>
              <li>
                <a href="#home">Terms of Service</a>
              </li>
              <li>
                <a href="#home">Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
