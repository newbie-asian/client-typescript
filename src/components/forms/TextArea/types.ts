import { ChangeEvent } from "react";

export interface ITextAreaProps {
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}
