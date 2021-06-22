import React from 'react';
import { WrapperInput } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <WrapperInput>
      <label className='inputDisplay'>
        {label}
        <input {...rest} />
      </label>
    </WrapperInput>
  );
};
