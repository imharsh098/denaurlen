import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/login.css";
import { loginAction } from "../actions/userActions";
import Loading from "./Loading";

const Login = () => {
  const { userInfo, error, loading } = useSelector((state) => state.info);

  const dispatch = useDispatch();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      history("/home");
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
      <div className="sign_in">Sign In</div>
      <div className="connect">Connect & Collect!</div>
      <form onSubmit={handleSubmit}>
        <div className="inemail">
          <input
            type="email"
            placeholder="Email"
            className="inemaill"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="group_1">
          <img src="./images/at.png" alt="" />
        </div>

        <div className="inpassword">
          <input
            type="password"
            placeholder="********"
            className="inpasswordd"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="group_2">
          <img src="./images/at.png" alt="" />
        </div>

        <div className="inhide">
          <img src="./images/hide.png" alt="" />
        </div>
        <input
          type="checkbox"
          className="check_box"
          value={check}
          onChange={handleCheck}
        />
        <div className="remember">Remember Me</div>
        <div className="submit_signin"></div>
        <button type="submit" className="signIn">
          SignIn
        </button>
      </form>
      <div className="line_1"></div>
      <div className="or">OR</div>
      <div className="line_2"></div>
      <div className="google"></div>
      <div className="logogoogle">
        <img src="./images/google.png" alt="" />
      </div>
      <div className="signgoogle">Sign In With Google</div>
      <div className="alreadymember">
        Are you new to Denaurlen?
        <Link to="/register">
          <span style={{ color: "#4b0082" }}>Sign Up</span>
        </Link>
      </div>
      <div className="privacy">
        Privacy Policy Denaurlen Copyright @ 2021, All Rights Reserved
      </div>
    </div>
  );
};

export default Login;
