// import { useRef } from "react";
// import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
// import { FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from "react-icons/fa";
// import { FiKey } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { LoginRequest } from "../../APIRequest/APIRequest";
// import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";

// const Login = () => {
//   let passRef,
//     emailRef = useRef();
//   const SubmitLogin = () => {
//     let email = emailRef.value;
//     let pass = passRef.value;
//     if (IsEmail(email)) {
//       ErrorToast("Invalid Email Address");
//     } else if (IsEmpty(pass)) {
//       ErrorToast("Password Required");
//     } else {
//       LoginRequest(email, pass).then((result) => {
//         if (result === true) {
//           window.location.href = "/";
//         }
//       });
//     }
//   };
//   return (
//     <Container
//       fluid
//       className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
//     >
//       <Row className="w-100">
//         <Col md={{ span: 6, offset: 3 }} lg={{ span: 5, offset: 3 }}>
//           <Card className="shadow-lg p-4 border-0 rounded">
//             <Card.Body>
//               <h4 className="text-center fw-bold mb-4">
//                 <FaSignInAlt className="me-2 text-primary" />
//                 Sign In
//               </h4>
//               <Form>
//                 {/* User Email Field */}
//                 <Form.Group className="mb-3" controlId="formEmail">
//                   <Form.Label className="fw-semibold">
//                     <FaEnvelope className="me-2" />
//                     Email Address
//                   </Form.Label>
//                   <Form.Control
//                     ref={(input) => (emailRef = input)}
//                     type="email"
//                     placeholder="Enter your email"
//                     className="animated fadeInUp"
//                   />
//                 </Form.Group>

//                 {/* User Password Field */}
//                 <Form.Group className="mb-3" controlId="formPassword">
//                   <Form.Label className="fw-semibold">
//                     <FiKey className="me-2" />
//                     Password
//                   </Form.Label>
//                   <Form.Control
//                     ref={(input) => (passRef = input)}
//                     type="password"
//                     placeholder="Enter your password"
//                     className="animated fadeInUp"
//                   />
//                 </Form.Group>

//                 <Button
//                   onClick={SubmitLogin}
//                   variant="primary"
//                   type="submit"
//                   className="w-100 animated fadeInUp d-flex align-items-center justify-content-center"
//                 >
//                   Next <FaLock className="ms-2" />
//                 </Button>
//               </Form>
//               <hr className="my-4" />
//               <div className="text-center">
//                 <Link
//                   to="/Registration"
//                   className="text-decoration-none me-3 text-primary fw-semibold"
//                 >
//                   <FaUserPlus className="me-1" />
//                   Sign Up
//                 </Link>
//                 <span className="text-muted">|</span>
//                 <Link
//                   to="/SendOTP"
//                   className="text-decoration-none ms-3 text-primary fw-semibold"
//                 >
//                   Forgot Password
//                 </Link>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;

import { useRef } from "react";
import { Link } from "react-router-dom";
import { LoginRequest } from "../../APIRequest/APIRequest";
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";

const Login = () => {
  let passRef,
    emailRef = useRef();

  const SubmitLogin = () => {
    let email = emailRef.value;
    let pass = passRef.value;
    if (IsEmail(email)) {
      ErrorToast("Invalid Email Address");
    } else if (IsEmpty(pass)) {
      ErrorToast("Password Required");
    } else {
      LoginRequest(email, pass).then((result) => {
        if (result === true) {
          window.location.href = "/";
        }
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90  p-4">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <br />
                <input
                  ref={(input) => (emailRef = input)}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <input
                  ref={(input) => (passRef = input)}
                  placeholder="User Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button
                  onClick={SubmitLogin}
                  className="btn w-100 animated fadeInUp float-end btn-primary"
                >
                  Next
                </button>
                <hr />
                <div className="float-end mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/Registration"
                    >
                      Sign Up{" "}
                    </Link>
                    <span className="ms-1">|</span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/SendOTP"
                    >
                      Forget Password
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
