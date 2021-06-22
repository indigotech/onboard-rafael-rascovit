import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
}

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <div>
      <input {...rest} />
    </div>
  );
};
