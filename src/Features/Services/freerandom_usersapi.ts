import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../api_urls/common_constant";
import type { RandomUserResponse } from "../../api_urls/interfaceTypes";

export const randomUsers = createApi({
  reducerPath: "random_users",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL.BASE_URL_THREE }),
  endpoints: (builder) => ({
    getRandomUserDetails: builder.query<RandomUserResponse, void>({
      query: () => ({
        url: "",
        params: {
          page: 1,
          limit: 500,
        },
      }),
    }),
  }),
});

export const kitchenSink = createApi({
  reducerPath: "kitchenSink",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL.BASE_URL_FOUR }),
  endpoints: (builder) => ({
    getKitchenData: builder.mutation<any, any>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetRandomUserDetailsQuery } = randomUsers;
export const { useGetKitchenDataMutation } = kitchenSink;
