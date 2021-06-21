import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { logout } from "../../Redux/Actions/userActions";

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return (
        <div>
            <header>
                <Navbar
                    bg="invisible"
                    variant="dark"
                    expand="lg"
                    collapseOnSelect
                >
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand>
                                {" "}
                                <strong style={{ color: "#65350f" }}>
                                    Choco Bar{" "}
                                </strong>
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                {isAuth ? (
                                    <>
                                        <LinkContainer to="/about">
                                            <Nav.Link>
                                                <strong
                                                    style={{ color: "#65350f" }}
                                                >
                                                    <i className="fas fa-info"></i>
                                                    About Us
                                                </strong>
                                            </Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/profile">
                                            <Nav.Link>
                                                <strong
                                                    style={{ color: "#65350f" }}
                                                >
                                                    <i className="fas fa-user"></i>
                                                    Profile
                                                </strong>
                                            </Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/cart">
                                            <Nav.Link>
                                                <strong
                                                    style={{ color: "#65350f" }}
                                                >
                                                    <i className="fas fa-shopping-cart"></i>
                                                </strong>
                                                <strong
                                                    style={{ color: "#65350f" }}
                                                >
                                                    Cart
                                                </strong>
                                            </Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer
                                            to="/"
                                            onClick={() => dispatch(logout())}
                                        >
                                            <Nav.Link>
                                                <strong
                                                    style={{ color: "#65350f" }}
                                                >
                                                    <i className="fas fa-sign-out-alt "></i>
                                                    Log out
                                                </strong>
                                            </Nav.Link>
                                        </LinkContainer>
                                    </>
                                ) : (
                                    <>
                                        <LinkContainer to="/about">
                                            <Nav.Link>
                                                <strong
                                                    style={{ color: "#65350f" }}
                                                >
                                                    <i className="fas fa-info"></i>
                                                    About Us
                                                </strong>
                                            </Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/register">
                                            <Nav.Link>
                                                <strong
                                                    style={{ color: "#65350f" }}
                                                >
                                                    <i className="fas fa-user"></i>
                                                    Sign Up
                                                </strong>
                                            </Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/login">
                                            <Nav.Link>
                                                <strong
                                                    style={{ color: "#65350f" }}
                                                >
                                                    <i className="fas fa-user"></i>
                                                    Sign In
                                                </strong>
                                            </Nav.Link>
                                        </LinkContainer>
                                    </>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
};

export default Header;
