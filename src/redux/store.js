import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { tweetsReducer } from "./tweets/slice";
import { followingsReducer } from "./followings/slice";
import { filterReducer } from "./filter/slice";

const persistConfig = {
  key: "followings",
  storage,
};

const followingsPersistReducer = persistReducer(
  persistConfig,
  followingsReducer
);

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    followings: followingsPersistReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
