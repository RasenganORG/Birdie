import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tweets: [
    {
      id: 502,
      user: "@ana",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing el",
      likes: "2",
      retweets: "3",
      replies: [],
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    },
  ],
}

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    like: (state, action) => {
      state.tweets.find((tweet) => tweet.id === action.payload).likes++
    },
    addTweet: (state, action) => {
      state.tweets.push(action.payload)
    },
    addReply: (state, action) => {
      state.tweets
        .find((tweet) => tweet.id.toString() === action.payload.tweetId)
        .replies.push(action.payload.replyId)
    },
  },
})

export default tweetsSlice.reducer
export const { like, addTweet, addReply } = tweetsSlice.actions
