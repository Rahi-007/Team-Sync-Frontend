import { RTKApi } from "@/context/rtk-query";
import { IAddUser, IUser } from "@/interface/user.interface";

export const userApi = RTKApi.injectEndpoints({
  endpoints: build => ({
    addUser: build.mutation<IUser, IAddUser>({
      query: data => ({
        url: "user",
        method: "POST",
        body: data,
      }),
    }),
    getUserByName: build.query<IUser, string>({
      query: name => `user/${name}`,
    }),
  }),
});

export const { useGetUserByNameQuery, useAddUserMutation } = userApi;