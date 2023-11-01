import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, PageTemplate } from "../../components";
import { token, user } from "../../key";
import "./settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const [isDarkTheme, setDarkTheme] = useLocalStorage("darkTheme", true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const toggleTheme = () => {
    setDarkTheme((prevValue: boolean) => !prevValue);
  };

  let changeUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const onChangeBtn = () => {
    if (
      firstName.length > 1 ||
      lastName.length > 1 ||
      email.length > 3 ||
      email.includes("@") ||
      newPassword.length > 2 ||
      newPassword === confirmPassword ||
      password === user().password
    ) {
      localStorage.setItem("user", JSON.stringify(changeUser));
      navigate("/games/home");
    } else {
      alert("Incorrect input data");
    }
  };

  return (
    <PageTemplate>
      <div className="settings_wrapper">
        {token && (
          <>
            <h3>Profile</h3>
            <div className="profile_container">
              <Input
                type="text"
                label="First name"
                placeholder={user().firstName}
                // value={firstName}
                onChange={setFirstName}
              />
              <Input
                type="text"
                label="Last name"
                placeholder={user().lastName}
                // value={lastName}
                onChange={setLastName}
              />
              <Input
                type="text"
                label="Email"
                placeholder={user().email}
                value={email}
                onChange={setEmail}
              />
            </div>
            <h3>Password</h3>
            <div className="password_container">
              <div className="new-password__password_container">
                <Input
                  type="password"
                  label="New password"
                  placeholder="New password"
                  value={password}
                  onChange={setPassword}
                />
                <Input
                  type="password"
                  label="Your password"
                  placeholder="Your password"
                  value={newPassword}
                  onChange={setNewPassword}
                />
              </div>
              <Input
                type="password"
                label="Confirm password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={setConfirmPassword}
              />
            </div>
          </>
        )}

        <h3>Color mode</h3>
        <div className="color-mode_container">
          <div className="theme-name">
            <h4>Dark</h4>
            <h4>Use dark theme</h4>
          </div>
          <label id="switch" className="switch">
            <input
              type="checkbox"
              checked={isDarkTheme}
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="buttons_container">
          <button
            onClick={() => navigate("/games/home")}
            className="btn-cancel"
            type="button"
          >
            Cancel
          </button>
          <button onClick={onChangeBtn} className="btn-save" type="button">
            Save
          </button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Settings;
