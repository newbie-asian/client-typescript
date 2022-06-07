export interface CreatedDate {
  value: string;
  timeZone: string;
}

export interface Todos {
  title: string;
  description: string;
  createdDate: CreatedDate;
  deadline: string;
}

export interface IHeaderProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  todos?: Todos[];
}
