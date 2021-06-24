import { Label } from 'components/label';
import React from 'react';
import styled from 'styled-components';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any[];
  label: string;
}

const renderOptions = (options: any[]) => {
  return (
    options &&
    options.length > 0 &&
    options.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      );
    })
  );
};

export const Select: React.FC<SelectProps> = ({ options, label, ...rest }) => {
  return (
    <div>
      <Label>{label}</Label>
      <SelectStyled {...rest}>{renderOptions(options)}</SelectStyled>
    </div>
  );
};

const SelectStyled = styled.select`
  border: 1px solid #777;
  background-color: white;
`;
