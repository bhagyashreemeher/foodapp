import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Axios, API_URL } from './../../constant';
import { useHistory } from 'react-router-dom';
import './user.css';

const Register = (props) => {

  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async data => {
    setIsLoading(true);
    const response = await Axios.post(`${API_URL}/profiles/signup`, data);
    if (response.data && response.data.data) {
      history.push('/');
    }
  };

  return (
    <div className="container">
      <p className="sign" align="center">
        Register
        </p>
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input type="text" className={errors.name ? 'form-control is-invalid' : 'form-control is-valid'} name="name" ref={register({ required: true, maxLength: 80 })} id="inputName" placeholder="Name" />
          <small id="name-help" className="form-text text-danger">
            {errors.name && "Your name is required"}
          </small>
        </div>
        <div className="form-group">
          <input type="password" name="password" ref={register({ required: true, maxLength: 80 })} className={errors.password ? 'form-control is-invalid' : 'form-control is-valid'} id="inputPassword" placeholder="Password" />
          <small id="password-help" className="text-danger">
            {errors.password && "Password is required"}
          </small>
        </div>
        <div className="form-group">
          <input type="password" className={errors.confirmPassword ? 'form-control is-invalid' : 'form-control is-valid'} name="confirmPassword" ref={register({ required: true, maxLength: 80, validate: (value) => value === watch('password') })} id="inputConfirmPassword" placeholder="Confirm Password" />
          <small id="password-help" className="text-danger">
            {errors.confirmPassword && "This must match Passowrd"}
          </small>
        </div>
        <div className="form-group">
          <input type="email" name="email" className={errors.email ? 'form-control is-invalid' : 'form-control is-valid'} ref={register({
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
          <input type="number" name="age" className={errors.age ? 'form-control is-invalid' : 'form-control is-valid'} ref={register({ required: true, min: 18, max: 80 })} id="inputAge" placeholder="Age" />
          <small id="age-help" className="text-danger">
            {errors.age && "Your age is required"}
          </small>
        </div>
        <div className="form-group">
          <input type="text" name="country" className={errors.country ? 'form-control is-invalid' : 'form-control is-valid'} ref={register({ required: true, maxLength: 80 })} id="inputCountry" placeholder="Country" />
          <small id="country-help" className="text-danger">
            {errors.country && "Your country is required"}
          </small>
        </div>
        <div className="form-group">
          <select className={errors.gender ? 'form-control is-invalid' : 'form-control is-valid'} name="gender" ref={register({ required: true })}>
            <option value="" defaultChecked></option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
          <small id="gender-help" className="text-danger">
            {(errors.gender) && "Your gender is required"}
          </small>
        </div>

        <div className="row justify-content-center">
          <button class="btn btn-primary submit col-md-6" type="submit">
            {isLoading === true ? 'Signing in...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;