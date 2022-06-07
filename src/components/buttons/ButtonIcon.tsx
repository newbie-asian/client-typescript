import React, { FC } from "react";

const ButtonIcon: FC = ({ styles, handler, btnTitle, disable }) => (
  <button onClick={handler} className={styles} disabled={disable}>
    {btnTitle}
  </button>
);

export default ButtonIcon;
