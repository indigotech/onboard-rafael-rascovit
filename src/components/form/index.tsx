import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string;
}

export const Form: React.FC<FormProps> = ({ title, ...rest }) => {
  return (
    <div>
      <h1>{title}</h1>
      <form {...rest} />
    </div>
  );
};
