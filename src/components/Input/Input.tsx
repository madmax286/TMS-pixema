import React, { FC, useEffect, useState } from "react";
import { IInput } from "../../interfaces";
import "./input.css";

const Input: FC<IInput> = ({label, placeholder, type, value, onChange}) => {
  return (
    <>
      {/* <div className="input__search-wrapper">
        <input
          type={type}
          placeholder={placeholder}
          name={value}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </div> */}
      {/* <h1>{`Search results '${value}'`}</h1> */}
    </>
  );
};

export default Input;
