import React from "react";
import { useForm } from 'react-hook-form';

const Register = (props) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = data => console.log(data);

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
        <div className="form-group row">
          <div className="col-sm-12">
            <input type="password" className={errors.confirmPassword ? 'form-control is-invalid' : 'form-control is-valid'} name="confirmPassword" ref={register({ required: true, maxLength: 80, validate: (value) => value === watch('password') })}  id="inputEmail" placeholder="Confirm Password" />
          </div>
          <div className="col-sm-12">
            <small id="password-help" className="text-danger">
              {errors.confirmPassword && "Password is required"}
            </small>
          </div>
        </div>
        
        <div className="form-group row">
          <div className="col-sm-12">
            <input type="text" name="country" className={errors.country ? 'form-control is-invalid' : 'form-control is-valid'} ref={register({ required: true, maxLength: 80 })}  id="inputEmail" placeholder="Country" />
          </div>
          <div className="col-sm-12">
            <small id="country-help" className="text-danger">
              {errors.country && "Your country is required"}
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

export default Register;