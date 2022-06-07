import React, { FC } from "react";
import { styles } from "../../../utils/Styles/styles";
import { ITextAreaProps } from "./types";

const TextArea: FC<ITextAreaProps> = ({
  name,
  value,
  handleChange,
  placeholder,
}: ITextAreaProps) => (
  <div>
    <textarea
      className={styles.formFields.general}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    ></textarea>
  </div>
);

export default TextArea;
