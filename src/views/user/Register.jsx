import React from "react";
import { useForm } from 'react-hook-form';

const Register = (props) => {

  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  return (
    <div className="container">
      <p className="sign" align="center">
        Register
        </p>
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input type="text" className={errors.name ? 'form-control is-invalid' : 'form-control is-valid'} name="name" ref={register({ required: true, maxLength: 80 })} id="inputEmail" placeholder="Name" />
          <small id="name-help" className="form-text text-danger">
            {errors.name && "Your name is required"}
          </small>
        </div>
        <div className="form-group">
          <input type="password" name="password" ref={register({ required: true, maxLength: 80 })} className={errors.password ? 'form-control is-invalid' : 'form-control is-valid'} id="inputEmail" placeholder="Password" />
          <small id="password-help" className="text-danger">
            {errors.password && "Password is required"}
          </small>
        </div>
        <div className="form-group">
          <input type="password" className={errors.confirmPassword ? 'form-control is-invalid' : 'form-control is-valid'} name="confirmPassword" ref={register({ required: true, maxLength: 80, validate: (value) => value === watch('password') })} id="inputEmail" placeholder="Confirm Password" />
          <small id="password-help" className="text-danger">
            {errors.confirmPassword && "Password is required"}
          </small>
        </div>
        <div className="form-group">
          <input type="email" name="email" className={errors.email ? 'form-control is-invalid' : 'form-control is-valid'} ref={register({ required: true, maxLength: 80 })} id="inputEmail" placeholder="Email" />
          <small id="email-help" className="text-danger">
            {errors.email && "Email is required"}
          </small>
        </div>
        <div className="form-group">
          <input type="text" name="age" className={errors.age ? 'form-control is-invalid' : 'form-control is-valid'} ref={register({ required: true, maxLength: 80 })} id="inputEmail" placeholder="Age" />
          <small id="age-help" className="text-danger">
            {errors.age && "Your age is required"}
          </small>
        </div>
        <div className="form-group">
          <input type="text" name="country" className={errors.country ? 'form-control is-invalid' : 'form-control is-valid'} ref={register({ required: true, maxLength: 80 })} id="inputEmail" placeholder="Country" />
          <small id="country-help" className="text-danger">
            {errors.country && "Your country is required"}
          </small>
        </div>
        <div className="row justify-content-center">
          <input
            type="submit"
            className="submit col-sm-6"
            align="center"
          />
        </div>
      </form>
    </div>
  );
}

export default Register;