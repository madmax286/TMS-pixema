import { FC } from 'react'
import { IInput } from '../../utils/interfaces';

const Input: FC<IInput> = ({label, placeholder, type, value, onChange}) => {
  
  return (
    <div className='input_container right'>
      <span className="label">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
}

export default Input