import React from 'react';
import styled from 'styled-components';

export const Title: React.FC = ({ ...rest }) => {
  return <TitleStyled {...rest} />;
};

const TitleStyled = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 20px 0;
`;
