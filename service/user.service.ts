import { RTKApi } from "@/context/rtk-query";
import { IAddUser, IUser } from "@/interface/user.interface";

export const userApi = RTKApi.injectEndpoints({
  endpoints: build => ({
    addUser: build.mutation<IUser, IAddUser>({
      query: data => ({
        url: "v1/user",
        method: "POST",
        body: data,
      }),
    }),
    getUserByName: build.query<IUser, string>({
      query: name => `user/${name}`,
    }),
    getAllUsers: build.query<IUser[], void>({
      query: () => "v1/user",
    }),
  }),
});

export const { useGetUserByNameQuery, useAddUserMutation, useGetAllUsersQuery } = userApi;