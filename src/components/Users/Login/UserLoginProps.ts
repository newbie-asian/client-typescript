import { ChangeEvent, FormEvent } from "react";

export interface Credentials {
  email: string;
  password: string;
}

export interface LoginProps {
  isInvalid: boolean;
  userCredentials: Credentials;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
