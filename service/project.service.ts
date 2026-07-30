import { RTKApi } from "@/context/rtk-query";
import { IAddProject, ISelectProject, IProject } from "@/interface/project.interface";

export const projectApi = RTKApi.injectEndpoints({
    endpoints: build => ({
        addProject: build.mutation<IProject, IAddProject>({
            query: data => ({
                url: "v1/project",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Project"],
        }),

        updateProject: build.mutation<IProject, { id: number; data: Partial<IAddProject> }>({
            query: ({ id, data }) => ({
                url: `v1/project/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Project"],
        }),

        deleteProject: build.mutation<void, number>({
            query: id => ({
                url: `v1/project/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Project"],
        }),

        getProjectById: build.query<IProject, number>({
            query: id => `v1/project/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Project", id }],
        }),

        getAllProjects: build.query<IProject[], void>({
            query: () => "v1/project",
            providesTags: ["Project"],
        }),

        selectProjects: build.query<ISelectProject[], void>({
            query: () => "v1/project/select",
            providesTags: ["Project"],
        }),
    }),
});

export const {
    useAddProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
    useGetProjectByIdQuery,
    useGetAllProjectsQuery,
    useSelectProjectsQuery
} = projectApi;