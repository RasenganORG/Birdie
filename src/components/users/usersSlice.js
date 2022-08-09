import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import usersService from "./usersService"

const initialState = {
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const getUsers = createAsyncThunk(
  "tweets/getUsers",
  async (thunkAPI) => {
    try {
      return await usersService.getUsers()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset(state) {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
    },
    follow: (state, action) => {
      state.users[action.payload].followers++
    },
    unfollow: (state, action) => {
      state.users[action.payload].followers--
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.tweets = null
      })
  },
})

export default usersSlice.reducer
export const { follow, unfollow } = usersSlice.actions
