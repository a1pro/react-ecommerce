import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { VscAccount } from "react-icons/vsc";
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";
import Logo from "../images/logo.png";
import Cart from "../images/cart.webp";
import { isUserLoggedIn, logoutUser } from "../utils/auth";

const Header = () => {
  const { isEmpty, totalItems } = useCart();

  const handleLogout = () => {
    logoutUser();
  };

  const handleLogin = () => {};

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className=""
      style={{
        width: "100%",
        position: "fixed",
        zIndex: "100",
        padding: "16px 0",
        backgroundColor: "#e7e7e7",
      }}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={Logo} style={{ width: "14%" }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ justifyContent: "end" }}>
            {!isUserLoggedIn() ? (
              <Link
                to="/sign-in"
                className="nav-link"
                id="signin-user"
                onClick={handleLogin}
              >
                Login
              </Link>
            ) : (
              <>
                <Link to="/sign-in" onClick={handleLogout} className="nav-link">
                  Logout
                </Link>

                <Link to="my-account" className="nav-link">
                  <VscAccount size="1.8rem" />
                  &nbsp;My Account
                </Link>
              </>
            )}
            <Link
              to="/cart"
              className="cart-box d-flex align-items-center"
              style={{ width: "5%", textDecoration: "none" }}
            >
              <img src={Cart} style={{ width: "100%" }} />
              {!isEmpty && (
                <span
                  style={{
                    position: "relative",
                    left: "-38px",
                    top: "-14px",
                    backgroundColor: "#191659",
                    color: "white",
                    borderRadius: "50%",
                    padding: "0px 8px",
                  }}
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
