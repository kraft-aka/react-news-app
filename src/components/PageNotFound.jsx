import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <Container className="container">
        <Row className="row">
          <Col className="col-12">
            <div className="text-center">
              <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                <Badge className="display-1 fw-bold fs-1" bg="danger">
                  404
                </Badge>
              </h2>
              <h3 className="h2 mb-2">Oops! You're lost.</h3>
              <p className="mb-5">
                The page you are looking for was not found.
              </p>
              <a
                className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0"
                onClick={() => navigate(-1)}
                role="button"
              >
                Back to Home
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageNotFound;
