import Button from "@restart/ui/esm/Button";
import React from "react";
import "../css/developers.css";
import { Col, Container, Row } from "react-bootstrap";

function Qualifications(props) {
  return (
    <Col lg={4} md={6} className="qual">
      <p>{props.qualification}</p>
    </Col>
  );
}

function Developers(props) {
  return (
    <Container mb={3} id="cUser">
      <Row>
        <Col lg={3} md={5} sm={12}>
          <img src={props.developer.dp} alt="" />
          <Col lg={12}>
            <div className="d-grid">
              <Button
                variant="outline-succes"
                size="lg"
                className="d-none d-md-block butn"
                type="submit"
              >
                VIEW {props.developer.nameCap}
              </Button>
            </div>
          </Col>
        </Col>
        <Col className="des">
          <Container className="con">
            <Row className="des1">
              <Col className="col1" lg={12} md={12}>
                <h3>{props.developer.name}</h3>
                <div className="star">
                  <p>{props.developer.rating}</p>
                </div>
              </Col>
            </Row>

            <Row className="des2">
              <Col lg={12}>
                <p>{props.developer.joining}</p>
                <p className="dot">{props.developer.time}</p>
              </Col>
            </Row>

            <Row className="des3">
              <Col lg={3} md={6} className="de3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/447/447031.png"
                  alt="pin"
                />
                <p>{props.developer.location}</p>
              </Col>
              <Col lg={3} md={6} className="de3">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/01/25/64/79/500_F_125647925_sEwC9GDYtLW9BmLA5wXnG9G6iX0w0X4j.jpg"
                  alt="earth"
                />
                <p>{props.developer.language}</p>
              </Col>
              <Col lg={4} md={6} className="de3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png"
                  alt="done"
                />
                <p>{props.developer.projects} Completed Projects</p>
              </Col>
              <Col lg={2} md={6} className="de3">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2976/premium/2976200.png?token=exp=1634051277~hmac=07061360cb19a9fca757d3e8cae93552"
                  alt="suitcase"
                />
                <p>{props.developer.clients} clients</p>
              </Col>
            </Row>

            <Row>
              <div className="des4">
                <Col className="col">
                  <p>{props.developer.des}</p>
                </Col>
              </div>
            </Row>

            <Row className="row des5">
              {props.developer.qualifications.map((qualification) => {
                return <Qualifications qualification={qualification} />;
              })}
            </Row>
          </Container>
          <div className="d-grid">
            <Button
              variant="outline-success"
              size="lg"
              className="d-md-none d-sm-block butn"
              type="submit"
            >
              VIEW NIKOLA
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Developers;
