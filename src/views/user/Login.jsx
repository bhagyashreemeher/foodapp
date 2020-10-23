import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class Login extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <p className="sign" align="center">
          Sign in
        </p>
        <Form className="login">
          <Form.Control
            className="un"
            type="text"
            align="center"
            placeholder="Username"
          />
          <Form.Control
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
          />
          <div  className="row justify-content-center">
            <Button
              className="submit col-md-3"
              onClick={(event) => {
                event.preventDefault();
                this.props.history.push("/signup");
              }}
              align="center"
            >
              Register
            </Button>
            <Button
              className="submit col-md-3"
              align="center"
              onClick={(event) => {
                event.preventDefault();
                console.log("hello");
              }}s
            >
              Signin
            </Button>
          </div>
          {/* <p class="forgot" align="center"><a href="#">Forgot Password?</p> */}
        </Form>
      </div>
    );
  }
}
