import React, { ChangeEvent, FC } from "react";

interface TextFieldProps {
  type: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  genStyles: string;
  uniqueStyles: string;
}

const TextField: FC<TextFieldProps> = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  genStyles,
  uniqueStyles,
}: TextFieldProps) => (
  <div className="w-full">
    <input
      className={`${genStyles} ${uniqueStyles}`}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required
    />
  </div>
);

export default TextField;
