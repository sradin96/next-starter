import React from 'react';
import Spinner from '../../Loaders/Spinner/Spinner';

type MainButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

const MainButton = ({
  children,
  type = 'button',
  onClick,
  className,
  disabled,
  isLoading,
}: MainButtonProps) => {
  return (
    <button
      className={`btn btn--main ${className?.length ? className : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Spinner color='#fff' /> : children}
    </button>
  );
};

export default MainButton;
