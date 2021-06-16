import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button' | undefined;
}

export const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <div>
      <button {...rest} />
    </div>
  );
};
