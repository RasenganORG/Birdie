import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import tweetsService from "./tweetsService"

const initialState = {
  tweets: [],
  currentTweet: null,
  currentTweetReplies: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const getTweets = createAsyncThunk(
  "tweets/getTweets",
  async (thunkAPI) => {
    try {
      return await tweetsService.getTweets()
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

export const addTweet = createAsyncThunk(
  "tweets/addTweet",
  async (tweet, thunkAPI) => {
    try {
      return await tweetsService.addTweet(tweet)
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

export const getTweetById = createAsyncThunk(
  "tweets/getTweetById",
  async (tweetId, thunkAPI) => {
    try {
      return await tweetsService.getTweetById(tweetId)
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

export const getReplies = createAsyncThunk(
  "tweets/getReplies",
  async (tweetId, thunkAPI) => {
    try {
      return await tweetsService.getReplies(tweetId)
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

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    reset(state) {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
    },
    like: (state, action) => {
      state.tweets.find((tweet) => tweet.id === action.payload).likes++
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTweets.pending, (state) => {
        state.isLoading = true
        state.tweets = []
      })
      .addCase(getTweets.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tweets = action.payload
      })
      .addCase(getTweets.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.tweets = null
      })
      .addCase(addTweet.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addTweet.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tweets = [action.payload, ...state.tweets]
      })
      .addCase(addTweet.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.tweets = null
      })
      .addCase(getTweetById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTweetById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.currentTweet = action.payload
      })
      .addCase(getTweetById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.currentTweet = null
      })
      .addCase(getReplies.pending, (state) => {
        state.isLoading = true
        state.tweets = []
      })
      .addCase(getReplies.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tweets = action.payload
      })
      .addCase(getReplies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.currentTweetReplies = null
      })
  },
})

export default tweetsSlice.reducer
export const { like } = tweetsSlice.actions
