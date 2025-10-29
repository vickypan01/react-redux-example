import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/Counter/counterSlice";
import { imageAPI, userAPI } from "../Features/Services/pho_usersapi";
import {
  randomUsers,
  kitchenSink,
} from "../Features/Services/freerandom_usersapi";
import { graphAPI } from "../Features/Services/graphql_query";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [userAPI.reducerPath]: userAPI.reducer,
    [imageAPI.reducerPath]: imageAPI.reducer,
    [randomUsers.reducerPath]: randomUsers.reducer,
    [kitchenSink.reducerPath]: kitchenSink.reducer,
    [graphAPI.reducerPath]: graphAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAPI.middleware)
      .concat(imageAPI.middleware)
      .concat(randomUsers.middleware)
      .concat(kitchenSink.middleware)
      .concat(graphAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
