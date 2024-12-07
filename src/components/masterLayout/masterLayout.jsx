import { useState } from "react";
import { Button, Container, Modal, Navbar, Offcanvas } from "react-bootstrap";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineLogout,
  AiOutlineMenuUnfold,
  AiOutlineUser,
} from "react-icons/ai";
import { BsHourglass, BsListNested } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { NavLink } from "react-router-dom";
import cat from "../../assets/images/cat.jpeg";

const MasterLayout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container fluid>
          <Navbar.Brand className="d-flex align-items-center">
            <AiOutlineMenuUnfold
              style={{
                fontSize: "30px",
                cursor: "pointer",
                marginRight: "10px",
              }}
              onClick={toggleSidebar}
            />
            <h1 style={{ fontSize: "20px", margin: 0 }}>Task Manager</h1>
          </Navbar.Brand>
          <div style={{ position: "relative" }}>
            <img
              src={cat}
              alt="User"
              onClick={toggleDropdown}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </div>
        </Container>
      </Navbar>

      {/* Sidebar */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavLink
            to="/"
            className="d-block mb-3 text-decoration-none text-dark"
          >
            <BsListNested className="me-2" /> Dashboard
          </NavLink>
          <NavLink
            to="/Create"
            className="d-block mb-3 text-decoration-none text-dark"
          >
            <AiOutlineEdit className="me-2" /> Create New
          </NavLink>
          <NavLink
            to="/Progress"
            className="d-block mb-3 text-decoration-none text-dark"
          >
            <BsHourglass className="me-2" /> In Progress
          </NavLink>
          <NavLink
            to="/Completed"
            className="d-block mb-3 text-decoration-none text-dark"
          >
            <AiOutlineCheckCircle className="me-2" /> Completed
          </NavLink>
          <NavLink
            to="/Canceled"
            className="d-block mb-3 text-decoration-none text-dark"
          >
            <MdOutlineCancelPresentation className="me-2" /> Canceled
          </NavLink>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Dropdown */}
      <Modal show={showDropdown} onHide={toggleDropdown} centered>
        <Modal.Header>
          <Modal.Title>User Info</Modal.Title>
          <AiOutlineClose
            style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
            onClick={toggleDropdown}
          />
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={cat}
            alt="User"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />
          <h6>First Name</h6>
          <hr />
          <NavLink
            to="/Profile"
            className="d-block mb-2 text-decoration-none text-dark"
          >
            <AiOutlineUser className="me-2" /> Profile
          </NavLink>
          <Button
            variant="outline-danger"
            className="w-100"
            onClick={() => alert("Logged Out")}
          >
            <AiOutlineLogout className="me-2" /> Logout
          </Button>
        </Modal.Body>
      </Modal>

      {/* Main Content */}
      <div style={{ marginTop: "70px", padding: "20px" }}>{props.children}</div>
    </>
  );
};

export default MasterLayout;
