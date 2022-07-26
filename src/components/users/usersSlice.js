import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [
    {
      user: "@ana",
      name: "ana",
      followers: 1,
    },
    {
      user: "@alex",
      name: "alex",
      followers: 2,
    },
    {
      user: "@mimi",
      name: "mimi",
      followers: 3,
    },
    {
      user: "@esteban",
      name: "este ban",
      followers: 4,
    },
  ],
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    follow: (state, action) => {
      state.users[action.payload].followers++
    },
    unfollow: (state, action) => {
      state.users[action.payload].followers--
    },
  },
})

export default usersSlice.reducer
export const { follow, unfollow } = usersSlice.actions
