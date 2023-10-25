import React, {FC, useState, useRef, useEffect} from 'react'

interface IInput {
    label?: string,
    placeholder?: string,
    type: 'text' | 'textarea' | 'password' | 'email' | 'file',
    value: string,
    onChange: (value: string) => void,
}

const Input: FC<IInput> = ({label, placeholder, type, value, onChange}) => {
  
  return (
    <div className='input_container right'>
      <span className="label">{label}</span>
      <input
        // ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
}

export default Input