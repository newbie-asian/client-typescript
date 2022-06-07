export interface Todos {
  id: string;
  title: string;
  description: string;
  status: boolean;
  createdDate: CreatedDate;
  deadline: string;
}
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
