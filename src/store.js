import { configureStore } from "@reduxjs/toolkit"
import tweetsReducer from "./components/tweets/tweetsSlice"
import usersReducer from "./components/users/usersSlice"

const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    users: usersReducer,
  },
})

export default store
