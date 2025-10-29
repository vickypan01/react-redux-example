import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../api_urls/common_constant";
import type { PostsQueryArgs, PostsResponse } from "../../DataTypes/types";

export const graphAPI = createApi({
  reducerPath: "graphAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL.BASE_URL_GRAPHQL_FIVE,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, PostsQueryArgs>({
      query: ({ page = 1, limit = 500 } = {}) => ({
        url: "",
        method: "POST",
        body: {
          query: `
            query ($options: PageQueryOptions) {
              posts(options: $options) {
                data {
                  id
                  title
                }
                meta {
                  totalCount
                }
              }
            }
          `,
          variables: {
            options: {
              paginate: {
                page,
                limit,
              },
            },
          },
        },
      }),

      transformResponse: (response: { data: { posts: PostsResponse } }) =>
        response.data.posts,
    }),
  }),
});

export const { useGetPostsQuery } = graphAPI;
