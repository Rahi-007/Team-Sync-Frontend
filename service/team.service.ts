import { RTKApi } from "@/context/rtk-query";
import { IAddTeam, ITeam } from "@/interface/team.interface";

export const teamApi = RTKApi.injectEndpoints({
  endpoints: build => ({
    addTeam: build.mutation<ITeam, IAddTeam>({
      query: data => ({
        url: "v1/team",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Team"],
    }),

    updateTeam: build.mutation<ITeam, { id: string; data: Partial<IAddTeam> }>({
      query: ({ id, data }) => ({
        url: `v1/team/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Team"],
    }),

    deleteTeam: build.mutation<void, string>({
      query: id => ({
        url: `v1/team/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Team"],
    }),

    getTeamById: build.query<ITeam, string>({
      query: id => `v1/team/${id}`,
    //   providesTags: (_result, _error, id) => [{ type: "team", id }],
    }),

    getAllTeams: build.query<ITeam[], void>({
      query: () => "v1/team",
      providesTags: ["Team"],
    }),
  }),
});

export const {
  useAddTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
  useGetTeamByIdQuery,
  useGetAllTeamsQuery,
} = teamApi;