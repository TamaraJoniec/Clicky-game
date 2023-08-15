import React from "react";
import './styles.css';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Home() {
    return (
    <div className="hero-banner">
      <Container fluid className="gradient-background py-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <h1 className="text-center text-light mb-4">Welcome</h1>
            <h2 className="text-center text-light mb-5">Explore my portfolio and discover web design from my perspective.</h2>
            <div className="d-flex justify-content-center">
              {/* Link to the project gallery */}
              <Link to="/React-Portfolio/project-gallery/">
                <button className="btn btn-lg btn-secondary mx-2">View Portfolio</button>
              </Link>
              {/* Link to the contact page */}
              <Link to="/React-Portfolio/contact/">
                <button className="btn btn-lg btn-outline-light mx-2">Contact Me</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      );
      }

export default HeroBanner;
