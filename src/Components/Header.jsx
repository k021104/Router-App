import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
    return (
        <Navbar expand="lg" className="navbar navbar-light bg-transparent">
            <Container fluid className="navbar-wrapper">

                <Navbar.Brand href="#home" className="d-flex align-items-center ms-3">
                    <i
                        className="fa-solid fa-book me-2"
                        style={{ color: "#06BBCC", fontSize: "32px" }}
                    ></i>
                    <h2 className="m-0 fw-bold" style={{ color: "#06BBCC" }}>
                        eLEARNING
                    </h2>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav" className="collapse-center">
                    <Nav className="ms-auto align-items-stretch me-3">
                        <Nav.Link
                            as={NavLink}
                            to="/"
                            end
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            HOME
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            ABOUT
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/courses"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            COURSES
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/instructors"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            OUR TEAM
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/testimonial"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            TESTIMONIAL
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            CONTACT
                        </Nav.Link>
                    </Nav>
                    <Button className="btnjoinnow">
                        Join Now<i className="fa-solid fa-arrow-right ps-2"></i>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
