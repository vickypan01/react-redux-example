export const USER_PRIVILADGE = {
  haveAccess: "HAVE_FULL_ACCESS",
  notAllowed: "NOT_ACCESS_ALLOWED",
  onlyView: "ONLY_VIEW_ACCESS",
} as const;

export const TIMEOUT = 5000;

export const MILLISECONDS_PER_SECOND = 1000;
export const SECONDS_PER_MINUTE = 60;
export const MINUTES_PER_HOUR = 60;
export const HOURS_PER_DAY = 24;
export const DAYS_PER_MONTH = 30;
export const DAYS_PER_WEEK = 7;

export const ACCESS_TOKEN_EXPIRY =
  15 * MINUTES_PER_HOUR * MILLISECONDS_PER_SECOND; // 15 hours

export const REFRESH_TOKEN_EXPIRY =
  DAYS_PER_WEEK * HOURS_PER_DAY * MINUTES_PER_HOUR * MILLISECONDS_PER_SECOND; // 7 days

export const ERROR_MESSAGES = {
  NETWORK: "Network error. Please try again later.",
  UNAUTHORIZED: "You are not authorized.",
};

export const API_BASE_URL = {
  BASE_URL_ONE: "https://jsonplaceholder.typicode.com",
  BASE_URL_TWO: "https://picsum.photos",
  BASE_URL_THREE: "https://api.freeapi.app/api/v1/public/randomusers",
  BASE_URL_FOUR:
    "https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post",
  BASE_URL_GRAPHQL_FIVE: "https://graphqlzero.almansi.me/api",
  BASE_URL_SIX: "https://api.freeapi.app/api/v1/public/stocks/stock/random",
  BASE_URL_SEVEN: "https://api.freeapi.app/api/v1/public",
  BASE_URL_EIGHT: "https://dummyjson.com/auth/login",
};
