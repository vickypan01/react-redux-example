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

export const marketStackeodLatestApi = createApi({
  reducerPath: "marketStackeodLatestData",
  baseQuery: fetchBaseQuery({
    baseUrl: MARKET_STACK_API_URLS.EOD_API_DATA,
  }),
  endpoints: (builder) => ({
    getEodLatestData: builder.query<any, string>({
      query: (latestData) => ({
        url: "/eod/latest",
        params: {
          access_key: MARKET_PLACE_API_KEY,
          symbols: latestData,
          limit: 100,
          offset: 0,
        },
      }),
    }),
  }),
});

export const marketStackIntradayDataApi = createApi({
  reducerPath: "marketStackIntradayData",
  baseQuery: fetchBaseQuery({
    baseUrl: MARKET_STACK_API_URLS.INTRADAY_API_DATA,
  }),
  endpoints: (builder) => ({
    getIntradayData: builder.query<any, string>({
      query: (symbol) => ({
        url: "/intraday",
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

export const realTimeStockMarketPricesLatestApi = createApi({
  reducerPath: "realTimeStockMarketPricesLatest",
  baseQuery: fetchBaseQuery({
    baseUrl: MARKET_STACK_API_URLS.REALTIME_STOCK_PRICE_API_DATA,
  }),
  endpoints: (builder) => ({
    getRealTimeStockMarketPricesLatest: builder.query<any, string>({
      query: (symbol) => ({
        url: "/stockprice",
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
export const { useGetIntradayDataQuery, useLazyGetIntradayDataQuery } =
  marketStackIntradayDataApi;
export const { useGetEodLatestDataQuery, useLazyGetEodLatestDataQuery } =
  marketStackeodLatestApi;
export const {
  useGetRealTimeStockMarketPricesLatestQuery,
  useLazyGetRealTimeStockMarketPricesLatestQuery,
} = realTimeStockMarketPricesLatestApi;
