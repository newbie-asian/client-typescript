import React, { FC } from "react";

const Button: FC<ButtonProps> = ({
  btnTitle,
  genStyles,
  uniqueStyles,
}: ButtonProps) => (
  <button className={` ${genStyles} ${uniqueStyles} `}>{btnTitle}</button>
);

export default Button;
