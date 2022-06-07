import { UserInfo } from "../../Users/Register/RegistrationProps";
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
  user: UserInfo;
}
