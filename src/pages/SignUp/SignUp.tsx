import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiKeyRawg } from "../../axiosConfig";
import { Input } from "../../components";
import PageTemplateSign from "../../components/PageTemplateSign/PageTemplateSign";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // [{ name: name, email: email, password: password, token: apiKeyRawg }];

  const onClickSignUp = () => {
    if (
      name.length > 1 &&
      email.length > 1 &&
      password.length > 1 &&
      password === confirmPassword
    ) {
      navigate("/games/home");
      sessionStorage.setItem("username", `${name}`);
      sessionStorage.setItem("email", `${email}`);
      sessionStorage.setItem("password", `${password}`);
      sessionStorage.setItem("token", `${apiKeyRawg}`);
    } else {
      alert("Incorrect input data");
    }
  };

  return (
    <div>
      <PageTemplateSign>
        <div className="sign-in_container sign-up">
          <h1>Sign Up</h1>
          <Input
            type="text"
            label="Name"
            placeholder="Your name"
            value={name}
            onChange={setName}
          />
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
          <Input
            type="password"
            label="Confirm Password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <button
            type="button"
            className="btn-signin"
            onClick={onClickSignUp}
          >
            Sign Un
          </button>
          <div className="signup">
            <span>Already have an account?</span>
            <Link to={"/signin"}>Sign In</Link>
          </div>
        </div>
      </PageTemplateSign>
    </div>
  );
};

export default SignUp;
