import React, { InputHTMLAttributes } from 'react';
import Loader from 'react-loader-spinner';

interface LoadingProps extends InputHTMLAttributes<HTMLInputElement> {
  height: number;
  width: number;
  type:
    | 'Audio'
    | 'BallTriangle'
    | 'Bars'
    | 'Circles'
    | 'Grid'
    | 'Hearts'
    | 'Oval'
    | 'Puff'
    | 'Rings'
    | 'TailSpin'
    | 'ThreeDots'
    | 'Watch'
    | 'RevolvingDot'
    | 'Triangle'
    | 'Plane'
    | 'MutatingDots'
    | 'CradleLoader';
}

export const LoadIndicator: React.FC<LoadingProps> = ({ ...rest }) => {
  return <Loader {...rest} />;
};
