import { Title } from 'components/title';
import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string;
}

export const Form: React.FC<FormProps> = ({ title, ...rest }) => {
  return (
    <div>
      <Title>{title}</Title>
      <form {...rest} />
    </div>
  );
};
