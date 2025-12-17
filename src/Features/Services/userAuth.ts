import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface UserAuthRequestBody {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
}

export const userAuthAPI = createApi({
  reducerPath: "userAuthAPI",

  baseQuery: async ({ url, method, body }) => {
    try {
      const token = localStorage.getItem("jwtToken");

      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();
      return { data };
    } catch (error: any) {
      return {
        error: {
          status: "FETCH_ERROR",
          message: error.message,
        },
      };
    }
  },

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (req: UserAuthRequestBody) => ({
        url: req.url,
        method: req.method,
        body: req.body,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = userAuthAPI;
