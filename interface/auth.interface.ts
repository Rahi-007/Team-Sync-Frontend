import { IUser } from "./user.interface";

export interface ILoginPayload {
  phone: string;
  password: string;
}

export interface ILoginRes {
  accessToken: string;
  user: IUser;
}