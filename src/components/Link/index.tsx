import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkComponent: React.FC<any> = ({ ...rest }) => {
  return <LinkStyled {...rest} />;
};

const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  background-color: white;
  color: black;
  height: 44px;
  margin: 8px 0;
  padding: 8px 16px;
  border: 2px solid black;
  border-radius: 4px;
`;
