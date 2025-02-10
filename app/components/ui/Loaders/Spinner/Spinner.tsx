import React from 'react';
import { CgSpinner } from 'react-icons/cg';

type SpinnerProps = {
  size?: number;
  color?: string;
};

const Spinner = ({ size = 30, color = '#000' }: SpinnerProps) => {
  return (
    <div className='spinner'>
      <CgSpinner color={color} size={size} className='spinner__icon' />
    </div>
  );
};

export default Spinner;
