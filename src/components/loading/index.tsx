import React, { InputHTMLAttributes } from 'react';
import Loader from 'react-loader-spinner';

interface LoadingProps extends InputHTMLAttributes<HTMLInputElement> {
  height: number;
  width: number;
}

export const LoadIndicator: React.FC<LoadingProps> = ({ type, ...rest }) => {
  return <Loader type='ThreeDots' {...rest} />;
};
