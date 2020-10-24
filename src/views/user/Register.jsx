import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';

const Register = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <p className="sign" align="center">
        Register
        </p>
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <input className="un" type="text" placeholder="First name" name="First name" ref={register({ required: true, maxLength: 80 })} />
        <input className="un" type="text" placeholder="Last name" name="Last name" ref={register({ required: true, maxLength: 100 })} />
        <input className="un" type="text" placeholder="Email" name="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
        <input type="submit" />
      </form>
      {/* <Form className="login" onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          className="un"
          type="text"
          align="center"
          placeholder="Username"
          ref={register({ required: true, maxLength: 80 })}
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
          placeholder="Confirm Password"
        />
        <div className="row justify-content-center">
          <Button
            type="submit"
            className="submit col-md-6"
            onClick={() => props.history.push("/signup")}
            align="center"
          >
            Register
            </Button>
        </div>
        <p class="forgot" align="center"><a href="#">Forgot Password?</p>
      </Form> */}
    </div>
  );
}

export default Register;

// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function App() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
{/* <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
<input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
<input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
<input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
<select name="Title" ref={register({ required: true })}>
  <option value="Mr">Mr</option>
  <option value="Mrs">Mrs</option>
  <option value="Miss">Miss</option>
  <option value="Dr">Dr</option>
</select>

<input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
<input name="Developer" type="radio" value="No" ref={register({ required: true })}/>

<input type="submit" /> */}
//     </form>
//   );
// }