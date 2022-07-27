import { configureStore } from "@reduxjs/toolkit"
import tweetsReducer from "./components/tweets/tweetsSlice"
import usersReducer from "./components/users/usersSlice"
import authSlice from "./components/auth/authSlice"

const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    users: usersReducer,
    auth: authSlice,
  },
})

export default store
