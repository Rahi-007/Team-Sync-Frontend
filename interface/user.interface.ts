import { Gender } from "@/config/enum";

export interface IUser {
  id: number;
  firstName: string;
  lastName?: string;
  phone: string;
  address?: string;
  avatar?: string;
  dateOfBirth?: Date;
  gender?: Gender;
  role: {
    id: number;
    name: string;
  };
  rfId?: number;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
  createdBy: {
    id: number;
    name: string;
  };
  updatedABy?: {
    id: number;
    name: string;
  };
}

export interface IAddUser {
  firstName: string;
  lastName?: string;
  phone: string;
  address?: string;
  avatar?: string;
  dateOfBirth?: Date;
  gender?: Gender;
  role: number;
  rfId?: number;
}
