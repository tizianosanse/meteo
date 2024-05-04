import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyFootere = () => (
  <Container className="text-white" style={{ backgroundColor: "#800000" }}>
    <Row>
      <Col md={6} className="text-center mt-2">
        <h5>
          {" "}
          <p>Servizi</p>{" "}
        </h5>
        <p>
          {" "}
          <p>Supporto</p>
        </p>
        <p></p>
      </Col>
      <Col md={6} className="text-center mt-2">
        <h5>Contattaci!</h5>
        <p>Numero: +333434392</p>
        <p>E-Mail: EPICLOUD@gmail.com</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-instagram me-3"
            viewBox="0 0 16 16"
          ></svg>
          <h6>EPICLOUD all right reserved </h6>
        </div>
      </Col>
    </Row>
  </Container>
);

export default MyFootere;
