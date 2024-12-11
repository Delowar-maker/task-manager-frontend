import { useRef } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FaEnvelope, FaLock, FaPhoneAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RegistrationRequest } from "../../APIRequest/APIRequest";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";

const Registration = () => {
  let emailRef,
    fastNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  const navigate = useNavigate();

  const onRegistration = (e) => {
    e.preventDefault();
    const email = emailRef.value;
    const password = passwordRef.value;
    const fastName = fastNameRef.value;
    const lastName = lastNameRef.value;
    const mobile = mobileRef.value;
    if (IsEmail(email)) {
      ErrorToast("Valid Email Address Required !");
    } else if (IsEmpty(fastName)) {
      ErrorToast("First Name Required !");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name Required !");
    } else if (!IsMobile(mobile)) {
      ErrorToast("Valid Mobile  Required !");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required !");
    } else {
      RegistrationRequest(email, fastName, lastName, mobile, password, "").then(
        (result) => {
          if (result === true) {
            navigate("/login");
          }
        }
      );
    }
    console.log(email, password, fastName, lastName, mobile);
  };
  return (
    <div className="">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center vh-100 bg-light"
      >
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={8} lg={6} xl={5}>
            <Card className="shadow p-4 border-0 rounded-3">
              <Card.Body>
                <h3 className="text-center text-primary fw-bold mb-4">
                  Create Account
                </h3>
                <Form>
                  {/* Email Address Field */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        ref={(input) => (emailRef = input)}
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* First Name Field */}
                  <Form.Group className="mb-3" controlId="formfastName">
                    <Form.Label>First Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaUser className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        ref={(input) => (fastNameRef = input)}
                        type="text"
                        placeholder="Enter your first name"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Last Name Field */}
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaUser className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        ref={(input) => (lastNameRef = input)}
                        type="text"
                        placeholder="Enter your last name"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Mobile Number Field */}
                  <Form.Group className="mb-3" controlId="formMobile">
                    <Form.Label>Mobile Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaPhoneAlt className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        ref={(input) => (mobileRef = input)}
                        type="tel"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Password Field */}
                  <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLock className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        ref={(input) => (passwordRef = input)}
                        type="password"
                        placeholder="Create a password"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Submit Button */}
                  <Button
                    onClick={onRegistration}
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 fw-bold rounded-pill"
                  >
                    Register
                  </Button>
                </Form>
                <hr className="my-4" />
                <div className="text-center">
                  <p>
                    Already have an account?{" "}
                    <a href="/login" className="text-primary fw-semibold">
                      Sign In
                    </a>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
