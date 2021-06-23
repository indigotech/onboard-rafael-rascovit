import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button' | undefined;
}

export const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return <ButtonStyled {...rest} />;
};

const ButtonStyled = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  background-color: blue;
  color: white;
  height: 44px;
  margin: 8px 0;
  padding: 8px 16px;
  border: 2px solid blue;
  border-radius: 4px;
`;
