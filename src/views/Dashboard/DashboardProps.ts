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
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  todos?: Todos[];
}
