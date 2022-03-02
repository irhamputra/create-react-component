import * as React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: string;
}

const Text: React.FC<TextProps> = ({ as, children, ...restProps }) =>
  React.createElement(as || "p", { ...restProps }, children);

export default Text;
