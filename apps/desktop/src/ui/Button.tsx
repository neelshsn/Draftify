import type { ButtonHTMLAttributes, FC } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, type = 'button', ...props }) => (
  <button type={type} {...props}>
    {children}
  </button>
);

export default Button;
