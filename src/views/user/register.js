import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "ritesh@gmail.com",
      password: "ritesh",
      name: "ritesh meher",
    };
  }

  render() {
    return (
      <div className="container">
        <p className="sign" align="center">
          Register
        </p>
        <Form className="login">
          <Form.Control
            className="un"
            type="text"
            align="center"
            placeholder="Username"
          />
          <Form.Control
            className="un"
            type="email"
            align="center"
            placeholder="Email"
          />
          <Form.Control
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
          />
          <Form.Control
            className="pass"
            type="password"
            align="center"
            placeholder="Retype Password"
          />
          <div className="row justify-content-center">
            <Button 
              type="submit"
              className="submit col-md-6"
              onClick={() => this.props.history.push("/signup")}
              align="center"
            >
              Register
            </Button>
          </div>
          {/* <p class="forgot" align="center"><a href="#">Forgot Password?</p> */}
        </Form>
      </div>
    )
  }
}
