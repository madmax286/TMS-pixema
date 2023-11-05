import { useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import { Input, PageTemplate } from "../../components";
import { token, user } from "../../utils/key";
import { ROUTE_HOME } from "../../utils/routes";
import "./settings.css";
import { theme } from "../../utils/helpers";

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
    window.location.reload()
  };

  let changeUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const onChangeBtn = () => {
    if (
      firstName.length > 1 &&
      lastName.length > 1 &&
      email.length > 3 &&
      email.includes("@") &&
      newPassword.length > 2 &&
      newPassword === confirmPassword &&
      password === user().password
    ) {
      localStorage.setItem("user", JSON.stringify(changeUser));
      window.location.reload()
    } else {
      alert("Incorrect input data");
    }
  };

  return (
    <PageTemplate>
      <div className={`settings_wrapper ${theme ? "" : "light-theme"}`}>
        {token && (
          <>
            <h3>Profile</h3>
            <div className="profile_container">
              <Input
                type="text"
                label="First name"
                placeholder={user().firstName}
                onChange={setFirstName}
              />
              <Input
                type="text"
                label="Last name"
                placeholder={user().lastName}
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
          {theme ? (
            <div className="theme-name">
              <h4>Dark</h4>
              <h4>Use dark theme</h4>
            </div>
          ) : (
            <div className="theme-name">
              <h4>Light</h4>
              <h4>Use light theme</h4>
            </div>
          )}

          <label id="switch" className="switch">
            <input
              type="checkbox"
              checked={isDarkTheme}
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
        </div>
        {token && (
          <div className="buttons_container">
            <button
              onClick={() => navigate(ROUTE_HOME)}
              className="btn-cancel"
              type="button"
            >
              Cancel
            </button>
            <button onClick={onChangeBtn} className="btn-save" type="button">
              Save
            </button>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default Settings;
