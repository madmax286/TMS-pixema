import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import PageTemplateSign from "../../components/PageTemplateSign/PageTemplateSign";
import { apiKeyRawg, user } from "../../key";
import "./signin.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onClickSignIn = () => {
    if (email === user.email && password === user.password) {
      sessionStorage.setItem("token", `${apiKeyRawg}`);
      navigate("/games/home");
    } else alert("Incorrect Email or Password");
    window.location.reload()

  };

  return (
    <div>
      <PageTemplateSign>
        <div className="sign-in_container">
          <h1>Sign In</h1>
          <Input
            type="email"
            label="Email"
            placeholder="Your email"
            value={email}
            onChange={setEmail}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={setPassword}
          />
          <a href="#">Forgot password?</a>
          <button type="button" className="btn-signin" onClick={onClickSignIn}>
            Sign In
          </button>
          <div className="signup">
            <span>Don't have an account?</span>
            <Link to={"/signup"}>Sign Up</Link>
          </div>
        </div>
      </PageTemplateSign>
    </div>
  );
};

export default SignIn;
