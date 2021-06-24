import React from 'react';
import styled from 'styled-components';

export const Label: React.FC = ({ ...rest }) => {
  return <LabelStyled {...rest} />;
};

const LabelStyled = styled.label`
  font-size: 12px;
  font-weight: normal;
  color: #777;
`;
