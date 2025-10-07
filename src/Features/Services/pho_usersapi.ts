import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../api_urls/common_constant";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL.BASE_URL_ONE }),
  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => "users",
    }),
  }),
});

export const imageAPI = createApi({
  reducerPath: "imageAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL.BASE_URL_TWO,
    responseHandler: async (response) => response,
  }),
  endpoints: (builder) => ({
    getRandomImage: builder.query<string, void>({
      query: () => "200/300",
      transformResponse: (response: Response) => response.url,
    }),
  }),
});

export const { useGetUsersQuery } = userAPI;
export const { useGetRandomImageQuery } = imageAPI;
