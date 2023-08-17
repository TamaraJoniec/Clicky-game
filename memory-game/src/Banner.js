import React from "react";
import './styles.css';
import { Container, Row, Col } from "react-bootstrap";

function Banner() {
    return (
    <div className="header">
      <Container fluid className="gradient-background py-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <h1 className="title">Clicky Game!</h1>
            <h2 className="instruction">Click on an image to earn points, but don't click on any more than once!.</h2>
        </Col>
        </Row>
      </Container>
      </div>
      );
      }

export default Banner;
