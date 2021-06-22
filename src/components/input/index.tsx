import React from 'react';
import { Wrapper } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <Wrapper>
      <label className='inputDisplay'>
        {label}
        <input {...rest} />
      </label>
    </Wrapper>
  );
};
