import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
