import { ChangeEvent, FormEvent } from "react";

export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  todos?: Todos[];
}

export interface IUseAddTodoProps {
  user: User;
  setUser: (_args: any) => any;
}

export interface Todos {
  id: string;
  title: string;
  description: string;
  status: boolean;
  createdDate: CreatedDate;
  deadline: string;
}

export interface CreatedDate {
  value: string;
  timeZone: string;
}

export interface IAddTodoProps {
  todo: Todos;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isDelayedTodo: boolean;
}
