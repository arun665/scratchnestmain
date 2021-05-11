import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
//import { auth } from "../../firebaseConfig.js";
// import { useStateValue } from "../../Redux/StateProvider";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

const styles = {
  container: {
    width: "80%",
    margin: "0 auto",
  },
  input: {
    width: "100%",
  },
};

type FormData = {
  name: string;
  email:string;
  password:string;
};

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, errors, formState } =   useForm<FormData>({
    defaultValues: {
      name: "",
        email:"",
  password:"",
    }
  });

  const login = (event:any) => {
    event.preventDefault();
   /* //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
      */
  };


  // const Register = (event) => {
  //   event.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)

  //     .then((auth) => {
  //       //user created and redirect to homepage
  //       history.push("/");
  //     })
  //     .catch((e) => alert(e.message));
  // };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://res.cloudinary.com/dpysmqax5/image/upload/v1613935054/logo_with_tag_line_wdipos.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            <h5>E-mail</h5>
          </label>
          <br />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            placeholder="Please enter your email here"
            type="email"
            ref={register}
            style={{ ...styles.input, borderColor: errors.email && "red" }}
          />
          {errors.email && (
            <p className="red">Email not valid & it's required field</p>
          )}

          <br />
          <label htmlFor="password">
            <h5>Password</h5>
          </label>
          <br />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            placeholder="Enter your password here"
            type="password"
            ref={register}
            style={{ ...styles.input, borderColor: errors.password && "red" }}
          />
          {errors.password && (
            <p className="red">
              Password length should be more than 6 characters & it's required
              field{" "}
            </p>
          )}
          <button onClick={login} type="submit" className="login_SigninButton">
            Sign In
          </button>
        </form>
        <p>
          By signing - in you agree the terms of our website. Check out our
          cookies, privacy notice prior to sign-in
        </p>
      </div>
      <br />
      <div className="login_divider">
        <div className="inside">
          <span className="span_login">
            <h5>New to Scratchnest?</h5>
          </span>
        </div>

        <button
          onClick={(e:any) => history.push("/createuser")}
          className="login_RegisterButton"
        >
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;