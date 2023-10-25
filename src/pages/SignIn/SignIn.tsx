import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiKeyRawg } from "../../axiosConfig";
import { Input } from "../../components";
import PageTemplateSign from "../../components/PageTemplateSign/PageTemplateSign";
import "./signin.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userEmail = sessionStorage.getItem("email");
  const userPassword = sessionStorage.getItem("password");

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
          <button
            type="button"
            className="btn-signin"
            onClick={() => {
              if ((email === userEmail) && (password === userPassword)) {
                sessionStorage.setItem("token", (`${apiKeyRawg}`));
                navigate("/games/home")
              } 
              else alert('Incorrect Email or Password')
            }
            } 
          >
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
