import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "@reach/router";
import { AiOutlineUser } from "react-icons/ai";
import { VscKey } from "react-icons/vsc";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const navigate = useNavigate();

  const authenticateUser = async (username, password) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        const data = response.data;

        if (data.token) {
          sessionStorage.setItem("token", data.token);
          return true;
        } else {
          throw new Error("Token not found in the response data");
        }
      } else {
        throw new Error(`Authentication failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the authentication:", error);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const username = form.username.value;
    const password = form.password.value;

    setLoading(true);

    const authenticationSuccessful = await authenticateUser(username, password);

    setLoading(false);

    if (authenticationSuccessful) {
      navigate("/", { replace: true });
      alert("Login successfully");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mt-5">
        <Col
          xs={11}
          sm={10}
          md={8}
          lg={4}
          className="p-4 rounded "
          style={{ boxShadow: "0px 0px 8px 1px gray" }}
        >
          <h1 className="text-center border-bottom pb-3">Sign in</h1>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-4 mt-5">
              <InputGroup.Text>
                <AiOutlineUser size="1.8rem" />
              </InputGroup.Text>

              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                minLength={3}
                required
              />
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Text>
                <VscKey size="1.8rem" />
              </InputGroup.Text>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                minLength={6}
                required
              />
            </InputGroup>
            <Button
              type="submit"
              className="m-auto d-block"
              disabled={loading}
              style={{ border: 0, backgroundColor: "#fd8a29" }}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  &nbsp;Loading...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
            <Form.Group className="mt-3 text-center">
              <Form.Text className="text-muted fw-bold">
                New to E-cart?
              </Form.Text>
              <Row className="py-2 border-bottom mb-3" />
              <Link
                to="/register"
                className="btn btn-info rounded-0"
                style={{
                  backgroundColor: "#191659",
                  border: "none",
                  color: "white",
                }}
              >
                Create your E-cart account
              </Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
