import * as React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    type: 'reset' | 'submit' | 'button',
}

const Button: React.FC<ButtonProps> = ({ type, children, ...restProps }) => {
    return <button type={type} {...restProps}>{children}</button>
}

export default Button