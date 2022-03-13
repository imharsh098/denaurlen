import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/register.css";
import { registerAction } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

const Register = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { loading, error, userInfo } = useSelector((state) => state.info);
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    check: false,
  });
  const handleChange = (e) => {
    if (e.target.id == "check") {
      setState({ ...state, [e.target.id]: !state.check });
    } else {
      setState({ ...state, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(state));
    setState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      check: false,
    });
  };
  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  }, [userInfo]);

  return (
    <div className="main">
      <div className="left_side">9.41</div>
      <div className="right_side">
        <img src="./images/mobile.png" alt="" className="mobile_signal" />

        <img src="./images/wifi.png" alt="" className="wifi" />
        <img src="./images/battery.png" alt="" className="battery" />
      </div>

      <div className="back">
        <img src="./images/back.png" alt="" />
      </div>
      <div className="sign_up">Sign Up</div>
      <div className="connect">Connect & Collect!</div>
      <div className="rectangle_38"></div>
      <div className="group_52">
        <img src="./images/at.png" alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="content_1"
          placeholder="First Name"
          id="firstname"
          value={state.firstname}
          onChange={handleChange}
        />
        <div className="rectangle_41"></div>
        <div className="group_53">
          <img src="./images/at.png" alt="" />
        </div>
        <input
          placeholder="Last Name"
          className="content_2"
          id="lastname"
          value={state.lastname}
          onChange={handleChange}
        />
        <div className="email"></div>
        <div className="group_51">
          <img src="./images/at.png" alt="" />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="emaill"
          id="email"
          value={state.email}
          onChange={handleChange}
        />
        <div className="username"></div>
        <div className="group_54">
          <img src="./images/at.png" alt="" />
        </div>
        <input
          placeholder="Username"
          className="usernamee"
          id="username"
          value={state.username}
          onChange={handleChange}
        />
        <div className="password"></div>
        <div className="rectangle">
          <div className="vector">
            <img src="./images/vector.png" alt="" />
          </div>
        </div>
        <input
          type="password"
          placeholder="********"
          className="passwordd"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
        <div className="hide">
          <img src="./images/hide.png" alt="" />
        </div>
        <div className="confirmpass"></div>
        <div className="rectangle_2">
          <div className="vector_2">
            <img src="./images/vector.png" alt="" />
          </div>
        </div>
        <input
          type="password"
          placeholder="Confirm Password"
          className="confirmpasss"
          id="confirmpassword"
          value={state.confirmpassword}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          className="stroke"
          id="check"
          value={state.check}
          onChange={handleChange}
        />
        <div className="terms">
          Accept Terms & Conditions.{" "}
          <span style={{ color: "#4b0082" }}>Click Here</span>
        </div>
        <div className="submit_signup"></div>

        <button
          type="submit"
          disabled={state.password != state.confirmpassword}
          className="sign"
        >
          SignUp
        </button>
      </form>
      <div className="alreadymember">
        Already a member of Denaurlen?
        <Link to="/">
          <span style={{ color: "#4b0082" }}>Sign in</span>
        </Link>
      </div>
      <div className="privacy">
        Privacy Policy Denaurlen Copyright @ 2021, All Rights Reserved
      </div>
    </div>
  );
};

export default Register;
