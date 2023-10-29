import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import PageTemplateSign from "../../components/PageTemplateSign/PageTemplateSign";
import { apiKeyRawg } from "../../key";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  }
  const onClickSignUp = async () => {
    if (
      firstName.length > 1 &&
      lastName.length > 1 &&
      email.length > 3 &&
      email.includes('@') &&
      password.length > 2 &&
      password === confirmPassword
    ) {
      localStorage.setItem("user", JSON.stringify(user));
      // sessionStorage.setItem("token", `${apiKeyRawg}`);
      navigate("/signin");
      alert('Вы успешно зарегистрированы!\nВы будете переадресованы на страницу входа')
      window.location.reload()

    } 
    else {
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
            label="First name"
            placeholder="Your first name"
            value={firstName}
            onChange={setFirstName}
          />
          <Input
            type="text"
            label="Last name"
            placeholder="Your last name"
            value={lastName}
            onChange={setLastName}
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
          <button type="button" className="btn-signin" onClick={onClickSignUp}>
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
