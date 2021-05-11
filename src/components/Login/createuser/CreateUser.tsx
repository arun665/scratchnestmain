//edited
import React, { useState, useEffect } from "react";
import "./createuser.css";
import { Link, useHistory } from "react-router-dom";
//import { auth } from "../../../firebaseConfig";
// import { useStateValue } from "../../Redux/StateProvider";

import { useForm } from "react-hook-form";
import Header from "../../Header/index";
// import AddItems from "../Products/addItems";
import Loader from "react-loader-spinner";
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

function Createuser() {
  // const [{ user }] = useStateValue();s
  const [name, setName] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
  });

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  let databody = {
    name: user.name,
    email: user.email,
  };

  useEffect(() => {
    // async function fetchUserData() {
    //   const res = await axios
    //     .post("/adduser", databody)
    //     .then((res) => {
    //       console.log("MONGOOOO" + res.data.email);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // fetchUserData();
    // setName(name);
  }, [user]);

  const signup = (event: any) => {
    event.preventDefault();
    //login logic

  /*auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((auth: any) => {
        auth.user.updateProfile({
          displayName: user.name,
        });
        setTimeout(() => {
          history.replace("/");
        }, 1500);
      })
      .then(() => setLoading(true))
      .catch((e) => alert(e.message));
  };*/
  }

  const handleOnChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(name);
  return (
    <div style={styles.container}>
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://res.cloudinary.com/dpysmqax5/image/upload/v1613935054/logo_with_tag_line_wdipos.png"
            alt=""
          />
        </Link>

        <div className="login_container">
          <h1>Register yourself by sign up</h1>
          <form>
            <label htmlFor="name">
              <h5>Name</h5>
            </label>
            <br />
            <input
              value={user.name}
              onChange={handleOnChange}
              name="name"
              placeholder="Enter you name here"
              type="text"
              ref={register({
                required: true,
              })}
              style={{ ...styles.input, borderColor: errors.name && "red" }}
            />
            {errors.name && <p className="red">This is required field</p>}
            <label htmlFor="email">
              <h5>E-mail</h5>
            </label>
            <br />
            <input
              value={user.email}
              onChange={handleOnChange}
              name="email"
              placeholder="Please enter your email here"
              type="email"
              ref={register({
                required: true,
                validate: (input) => isEmail(input),
              })}
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
              value={user.password}
              onChange={handleOnChange}
              name="password"
              placeholder="Enter your password here"
              type="password"
              //   ref={register({
              //     required: true,
              //     minLength: 6,
              //     message: "min length should be 6",
              //   })}
              style={{ ...styles.input, borderColor: errors.password && "red" }}
            />
            {errors.password && (
              <p className="red">
                Password length should be more than 6 characters & it's required
                field{" "}
              </p>
            )}

            {errors.email || errors.password || errors.user ? (
              <p>Please correct above errors in order to proceed further</p>
            ) : (
              <>
                <br />
                <button
                  onClick={signup}
                  type="submit"
                  className="login_SigninButton"
                >
                  {loading ? <p>Loading ... </p> : "Create account on Scratchnest"}
                </button>
              </>
            )}
          </form>

          <p>
            By creating an account, you agree to the Terms of Use and Privacy
            Notice of Scratchnest.
          </p>

          <div className="register__alreadyAccount">
            ¿Already have an account?&nbsp;
            <Link to="/login">
              <strong>Sign in</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createuser;
