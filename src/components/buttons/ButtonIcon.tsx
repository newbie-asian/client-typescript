import React, { FC } from "react";
import { IButtonIcons } from "./types";

const ButtonIcon: FC<IButtonIcons> = ({
  styles,
  handler,
  btnTitle,
  disable,
}) => (
  <button onClick={handler} className={styles} disabled={disable}>
    {btnTitle}
  </button>
);

export default ButtonIcon;
