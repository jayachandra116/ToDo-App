import React from "react";

type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  classes?: string;
  children: React.ReactNode;
};

const Button: React.FunctionComponent<buttonProps> = ({
  onClick,
  children,
  classes,
  ...props
}) => {
  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
