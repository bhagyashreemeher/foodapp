import React from "react";
import { useForm } from 'react-hook-form';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <p className="sign" align="center">
        Login
        </p>
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row">
          <div className="col-sm-12">
            <input type="email" name="email" className={errors.email ? 'form-control is-invalid' : 'form-control is-valid'} ref={register({ required: true, maxLength: 80 })} id="inputEmail" placeholder="Email" />
          </div>
          <div className="col-sm-12">
            <small id="email-help" className="text-danger">
              {errors.email && "Email is required"}
            </small>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <input type="password" name="password" ref={register({ required: true, maxLength: 80 })} className={errors.password ? 'form-control is-invalid' : 'form-control is-valid'} id="inputEmail" placeholder="Password" />
          </div>
          <div className="col-sm-12">
            <small id="password-help" className="text-danger">
              {errors.password && "Password is required"}
            </small>
          </div>
        </div>
        <div className="row justify-content-center">
          <input
            type="submit"
            className="submit col-md-6"
            // onClick={() => props.history.push("/signup")}
            align="center"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
