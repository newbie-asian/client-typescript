import { ChangeEvent, FormEvent } from "react";

export interface RegisterProps {
  emailExist: boolean;
  user: User;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Todos {
  title: string;
  description: string;
  createdDate: {
    value: string;
    timeZone: string;
  };
  deadline: string;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  todos?: Todos[];
}
