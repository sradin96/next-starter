import React from 'react';
import Spinner from '../../Loaders/Spinner/Spinner';

type SecondaryButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

const SecondaryButton = ({
  children,
  type = 'button',
  onClick,
  className,
  disabled,
  isLoading,
}: SecondaryButtonProps) => {
  return (
    <button
      className={`btn btn--secondary ${className?.length ? className : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Spinner size={18} /> : children}
    </button>
  );
};

export default SecondaryButton;
