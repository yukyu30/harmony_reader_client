import React from 'react';

interface ButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'transparent'
    | 'outlined';
  children?: React.ReactNode;
}

export const Button = ({ variant, children }: ButtonProps) => {
  return <Button variant={variant}>{children}</Button>;
};
