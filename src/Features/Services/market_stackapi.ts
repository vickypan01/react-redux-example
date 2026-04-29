import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  MARKET_STACK_API_URLS,
  MARKET_PLACE_API_KEY,
} from "../../api_urls/common_constant";

export const marketStackeodDataApi = createApi({
  reducerPath: "marketStackeodData",
  baseQuery: fetchBaseQuery({
    baseUrl: MARKET_STACK_API_URLS.EOD_API_DATA,
  }),
  endpoints: (builder) => ({
    getEodData: builder.query<any, string>({
      query: (symbol) => ({
        url: "/eod",
        params: {
          access_key: MARKET_PLACE_API_KEY,
          symbols: symbol,
          limit: 100,
          offset: 0,
        },
      }),
    }),
  }),
});

export const { useGetEodDataQuery, useLazyGetEodDataQuery } =
  marketStackeodDataApi;
