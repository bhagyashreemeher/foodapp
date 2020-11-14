import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Axios, API_URL } from '../../constant';
import { useHistory } from "react-router-dom";
import './user.css';

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async data => {
    setIsLoading(true);
    const response = await Axios.post(`${API_URL}/profiles/signin`, data);
    if (response.data && response.data.data) {
      localStorage.setItem('jwt', response.data.jtoken);
      history.push('/');
    }
  };

  return (
    <div className="container">
      <p className="sign" align="center">
        Login
      </p>
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input type="email" name="email" className={'form-control ' + (errors.email ? 'is-invalid' : 'is-valid')} ref={register({
            required: true, pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })} id="inputEmail" placeholder="Email" />
          <small id="email-help" className="text-danger">
            {errors.email && "Email is required"}
          </small>
        </div>
        <div className="form-group">
          <input type="password" name="password" className={'form-control ' + (errors.email ? 'is-invalid' : 'is-valid')} ref={register({ required: true, maxLength: 80 })} id="inputPassword" placeholder="Password" />
          <small id="password-help" className="text-danger">
            {errors.password && "Password is required"}
          </small>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-primary submit col-md-6" type="submit">
            {isLoading === true ? 'Signing in...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
