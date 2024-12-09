import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
    >
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 5, offset: 3 }}>
          <Card className="shadow-lg p-4 border-0 rounded">
            <Card.Body>
              <h4 className="text-center fw-bold mb-4">
                <FaSignInAlt className="me-2 text-primary" />
                Sign In
              </h4>
              <Form>
                {/* User Email Field */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-semibold">
                    <FaEnvelope className="me-2" />
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="animated fadeInUp"
                  />
                </Form.Group>

                {/* User Password Field */}
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label className="fw-semibold">
                    <FiKey className="me-2" />
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    className="animated fadeInUp"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 animated fadeInUp d-flex align-items-center justify-content-center"
                >
                  Next <FaLock className="ms-2" />
                </Button>
              </Form>
              <hr className="my-4" />
              <div className="text-center">
                <Link
                  to="/Registration"
                  className="text-decoration-none me-3 text-primary fw-semibold"
                >
                  <FaUserPlus className="me-1" />
                  Sign Up
                </Link>
                <span className="text-muted">|</span>
                <Link
                  to="/SendOTP"
                  className="text-decoration-none ms-3 text-primary fw-semibold"
                >
                  Forgot Password
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
