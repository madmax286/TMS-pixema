import React from "react";
import { Input, PageTemplate } from "../../components";
import "./settings.css";

const Settings = () => {
  return (
    <PageTemplate>
      <div className="settings_wrapper">
        <h3>Profile</h3>
        <div className="profile_container">
          <Input
            type="text"
            label="Name"
            placeholder="{name}"
            value="{password}"
            // onChange={setPassword}
            onChange={() => {}}
          />
          <Input
            type="text"
            label="Email"
            placeholder="{email}"
            value="{password}"
            // onChange={setPassword}
            onChange={() => {}}
          />
        </div>
        <h3>Password</h3>
        <div className="password_container">
          <div className="new-password__password_container">
            <Input
              type="password"
              label="New password"
              placeholder="New password"
              value="{password}"
              // onChange={setPassword}
              onChange={() => {}}
            />
            <Input
              type="password"
              label="Confirm password"
              placeholder="Confirm password"
              value="{password}"
              // onChange={setPassword}
              onChange={() => {}}
            />
          </div>
          <Input
            type="password"
            label="Your password"
            placeholder="Your password"
            value="{password}"
            // onChange={setPassword}
            onChange={() => {}}
          />
        </div>
        <h3>Color mode</h3>
        <div className="color-mode_container">
          <div className="theme-name">
            <h4>Dark</h4>
            <h4>Use dark theme</h4>
          </div>
          <label id="switch" className="switch">
            <input type="checkbox" onChange={() => {}} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="buttons_container">
          <button className="btn-cancel" type="button">
            Cancel
          </button>
          <button className="btn-save" type="button">
            Save
          </button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Settings;
