import React from "react";
import "../css/end.css";
import { Container, Row, Col } from "react-bootstrap";

function End() {
  return (
    <div id="end">
      <Container>
        <Row>
          {/* <div class="col-lg-0half d-none d-lg-block"></div> */}
          <Col lg={3} md={4}>
            <img
              src="https://codeable.io/wp-content-new/uploads/2019/10/mobile-white.svg"
              alt=""
              class="ehead"
            />
            <img
              src="https://www.codeable.io/wp-content-new/themes/codeable-theme/resources/img/general/arrow-down.svg"
              alt=""
            />
            <h3>Build with heart</h3>
            <p>
              When you absolutely, positively need the highest quality WordPress
              development work.
            </p>
            <img
              src="https://www.codeable.io/wp-content-new/themes/codeable-theme/dist/img/social/brands-twitter.svg"
              alt=""
            />
            <img
              src="https://www.codeable.io/wp-content-new/themes/codeable-theme/dist/img/social/brands-facebook.svg"
              alt=""
            />
          </Col>
          {/* <div class="col-lg-0half d-none d-lg-block"></div> */}
          <Col lg={2} md={4}>
            <h2>Solutions</h2>
            <a href="#home">Businesses</a>
            <a href="#home">Agencies</a>
            <a href="#home">Freelancers</a>
          </Col>
          <Col lg={2} md={4}>
            <h2>Resources</h2>
            <a href="#home">How it works</a>
            <a href="#home">Help center</a>
            <a href="#home">Blog</a>
          </Col>
          <Col lg={2} md={4}>
            <h2>Developers</h2>
            <a href="#home">Wordpress developers</a>
            <a href="#home">Woocommerce developers</a>
          </Col>
          <Col lg={2} md={4}>
            <h2>Company</h2>
            <a href="#home">Our story</a>
            <a href="#home">Our team</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default End;
