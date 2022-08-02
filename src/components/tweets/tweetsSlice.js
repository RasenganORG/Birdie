import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tweets: [
    {
      id: 502,
      user: "@ana",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing el",
      likes: "0",
      retweets: "0",
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
      console.log(action.payload)
      state.tweets
        .find(
          (tweet) => tweet.id.toString() === action.payload.tweetId.toString()
        )
        .replies.push(action.payload.replyId)
    },
    retweet: (state, action) => {
      state.tweets.find((tweet) => tweet.id === action.payload).retweets++
    },
  },
})

export default tweetsSlice.reducer
export const { like, addTweet, addReply, retweet } = tweetsSlice.actions
