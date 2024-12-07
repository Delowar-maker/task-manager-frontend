import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {
  AiOutlineLogout,
  AiOutlineMenuUnfold,
  AiOutlineUser,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const MasterLayout = () => {
  return (
    <Navbar className="fixed-top px-0 shadow-sm">
      <Container fluid={true}>
        <Navbar.Brand className="d-flex">
          <a className="icon-nav m-3 h5 ">
            <AiOutlineMenuUnfold />
          </a>
          <h1>Task Manager</h1>
        </Navbar.Brand>
        <div className="float-right h-auto d-flex">
          <div className="user-dropdown">
            <img
              className="icon-nav-img icon-nav"
              src="holder.js/171x180"
              alt=""
            />
            <div className="user-dropdown-content ">
              <div className="mt-4 text-center">
                <img className="icon-nav-img" src="holder.js/171x180" alt="" />
                <h6>frist Name</h6>
                <hr className="user-dropdown-divider  p-0" />
              </div>
              <NavLink to="/Profile" className="side-bar-item">
                <AiOutlineUser className="side-bar-item-icon" />
                <span className="side-bar-item-caption">Profile</span>
              </NavLink>
              <a className="side-bar-item">
                <AiOutlineLogout className="side-bar-item-icon" />
                <span className="side-bar-item-caption">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default MasterLayout;
