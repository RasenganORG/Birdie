import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import tweetsService from "./tweetsService"

const initialState = {
  tweets: [],
  currentTweet: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoadingLike: false,
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

export const getTweetsForHome = createAsyncThunk(
  "tweets/getTweetsForHome",
  async (userId, thunkAPI) => {
    try {
      return await tweetsService.getTweetsForHome(userId)
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

export const addLike = createAsyncThunk(
  "tweets/addLike",
  async (data, thunkAPI) => {
    try {
      return await tweetsService.addLike(data)
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

export const deleteLike = createAsyncThunk(
  "tweets/deleteLike",
  async (data, thunkAPI) => {
    try {
      return await tweetsService.deleteLike(data)
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

export const likeTweet = createAsyncThunk(
  "tweets/likeTweet",
  async (tweetId, thunkAPI) => {
    try {
      return await tweetsService.likeTweet(tweetId)
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

export const dislikeTweet = createAsyncThunk(
  "tweets/dislikeTweet",
  async (tweetId, thunkAPI) => {
    try {
      return await tweetsService.dislikeTweet(tweetId)
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

export const getTweetsByUserId = createAsyncThunk(
  "tweets/getTweetsByUserId",
  async (userId, thunkAPI) => {
    try {
      return await tweetsService.getTweetsByUserId(userId)
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
      state.currentTweet = null
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
        state.currentTweet = null
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
      .addCase(addLike.pending, (state) => {
        state.isLoadingLike = true
      })
      .addCase(addLike.fulfilled, (state, action) => {
        console.log("action: " + action.payload.id)
        console.log("state: " + state.tweets[0].id)
        console.log("action.payload: " + action.payload.likes)
        state.isLoadingLike = false
        state.isSuccess = true
      })
      .addCase(addLike.rejected, (state, action) => {
        state.isLoadingLike = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteLike.pending, (state) => {
        state.isLoadingLike = true
      })
      .addCase(deleteLike.fulfilled, (state, action) => {
        console.log("action: " + action.payload.id)
        console.log("state: " + state.tweets[0].id)
        console.log("action.payload: " + action.payload.likes)
        state.isLoadingLike = false
        state.isSuccess = true
      })
      .addCase(deleteLike.rejected, (state, action) => {
        state.isLoadingLike = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(likeTweet.pending, (state) => {
        state.isLoadingLike = true
      })
      .addCase(likeTweet.fulfilled, (state, action) => {
        console.log("action: " + action.payload.id)
        console.log("state: " + state.tweets[0].id)
        state.isLoadingLike = false
        state.isSuccess = true
        state.currentTweet !== null
          ? state.currentTweet.id === action.payload.id &&
            state.currentTweet.likes++
          : state.tweets.find((tweet) => tweet.id === action.payload.id).likes++

        state.currentTweet !== null &&
          state.currentTweet.id !== action.payload.id &&
          state.tweets.find((tweet) => tweet.id === action.payload.id).likes++
      })
      .addCase(likeTweet.rejected, (state, action) => {
        state.isLoadingLike = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(dislikeTweet.pending, (state) => {
        state.isLoadingLike = true
      })
      .addCase(dislikeTweet.fulfilled, (state, action) => {
        console.log("action: " + action.payload.id)
        console.log("state: " + state.tweets[0].id)
        state.isLoadingLike = false
        state.isSuccess = true
        state.currentTweet !== null
          ? state.currentTweet.id === action.payload.id &&
            state.currentTweet.likes--
          : state.tweets.find((tweet) => tweet.id === action.payload.id).likes--

        state.currentTweet !== null &&
          state.currentTweet.id !== action.payload.id &&
          state.tweets.find((tweet) => tweet.id === action.payload.id).likes--
      })
      .addCase(dislikeTweet.rejected, (state, action) => {
        state.isLoadingLike = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getTweetsByUserId.pending, (state) => {
        state.isLoading = true
        state.tweets = []
      })
      .addCase(getTweetsByUserId.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tweets = action.payload
        state.currentTweet = null
      })
      .addCase(getTweetsByUserId.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.tweets = null
      })
      .addCase(getTweetsForHome.pending, (state) => {
        state.isLoading = true
        state.tweets = []
      })
      .addCase(getTweetsForHome.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tweets = action.payload
        state.currentTweet = null
      })
      .addCase(getTweetsForHome.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.tweets = null
      })
  },
})

export default tweetsSlice.reducer
