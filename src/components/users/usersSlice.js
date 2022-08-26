import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import usersService from "./usersService"

const initialState = {
  users: [],
  followers: [],
  nrOfFollowers: null,
  followedUsers: [],
  nrOfFollowedUsers: null,
  userById: null,
  usersById: [],
  searchedUsers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const getUsers = createAsyncThunk("users/getUsers", async (thunkAPI) => {
  try {
    return await usersService.getUsers()
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const getUsersByUsername = createAsyncThunk(
  "users/getUsersByUsername",
  async (username, thunkAPI) => {
    try {
      return await usersService.getUsersByUsername(username)
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

export const getUserById = createAsyncThunk(
  "users/getUserById",
  async (userId, thunkAPI) => {
    try {
      return await usersService.getUserById(userId)
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

export const getUsersById = createAsyncThunk(
  "users/getUsersById",
  async (userIds, thunkAPI) => {
    try {
      return await usersService.getUsersById(userIds)
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

export const editUser = createAsyncThunk(
  "users/editUser",
  async (user, thunkAPI) => {
    try {
      return await usersService.editUser(user)
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

export const followUser = createAsyncThunk(
  "users/followUser",
  async (data, thunkAPI) => {
    try {
      return await usersService.followUser(data)
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

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async (data, thunkAPI) => {
    try {
      return await usersService.unfollowUser(data)
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

export const getFollowers = createAsyncThunk(
  "users/getFollowers",
  async (userId, thunkAPI) => {
    try {
      return await usersService.getFollowers(userId)
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

export const getFollowedUsers = createAsyncThunk(
  "users/getFollowedUsers",
  async (userId, thunkAPI) => {
    try {
      return await usersService.getFollowedUsers(userId)
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
    followUserFromTheirProfile(state) {
      state.userById.isFollowed = !state.userById.isFollowed
      state.nrOfFollowers++
    },
    unfollowUserFromTheirProfile(state) {
      state.userById.isFollowed = !state.userById.isFollowed
      state.nrOfFollowers--
    },
    followUserFromModal(state, action) {
      state.followedUsers[action.payload].isFollowed = !state.followedUsers[
        action.payload
      ].isFollowed
      state.nrOfFollowedUsers++
    },
    unfollowUserFromModal(state, action) {
      console.log("INDEX", action.payload)
      state.followedUsers[action.payload].isFollowed = !state.followedUsers[
        action.payload
      ].isFollowed
      state.nrOfFollowedUsers--
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
      .addCase(getUsersByUsername.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUsersByUsername.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.searchedUsers = action.payload
      })
      .addCase(getUsersByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.searchedUsers = []
      })
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userById = action.payload
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.userById = null
      })
      .addCase(getUsersById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUsersById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.usersById = action.payload
      })
      .addCase(getUsersById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.usersById = []
      })
      .addCase(editUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(followUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        // state.userById.isFollowed = !state.userById.isFollowed
        // state.nrOfFollowers++
      })
      .addCase(followUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(unfollowUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        // state.userById.isFollowed = !state.userById.isFollowed
        // state.nrOfFollowers--
      })
      .addCase(unfollowUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getFollowers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFollowers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.followers = action.payload
        state.nrOfFollowers = state.followers.length
      })
      .addCase(getFollowers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getFollowedUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFollowedUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.followedUsers = action.payload
        state.nrOfFollowedUsers = state.followedUsers.length
      })
      .addCase(getFollowedUsers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const {
  followUserFromTheirProfile,
  unfollowUserFromTheirProfile,
  followUserFromModal,
  unfollowUserFromModal,
} = usersSlice.actions
export default usersSlice.reducer
