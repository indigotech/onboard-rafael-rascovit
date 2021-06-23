import { Label } from 'components/label';
import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <WrapperInput>
      <Label>
        {label}
        <InputStyled {...rest} />
      </Label>
    </WrapperInput>
  );
};

const InputStyled = styled.input`
  border: 1px solid #777;
`;

const WrapperInput = styled.div`
  display: table-caption;
  margin-bottom: 12px;
`;
