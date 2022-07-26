import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tweets: [
    {
      user: "@ana",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing el",
      likes: "2",
      retweets: "3",
      replies: "4",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    },
    {
      user: "@alex",
      text:
        "lorem ipsum dolor sit amet, consect et, adipiscing el sit amet, consectetur adipiscing",
      likes: "2",
      retweets: "5",
      replies: "4",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg",
    },
    {
      user: "@mimi",
      text: "lorem ipsum dolor sit amet",
      likes: "2",
      retweets: "3",
      replies: "5",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/30.jpg",
    },
    {
      user: "@esteban",
      text: "lorem ipsum dolor  adipiscing el",
      likes: "4",
      retweets: "3",
      replies: "4",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
    },
  ],
}

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    like: (state, action) => {
      state.tweets[action.payload].likes++
    },
    addTweet: (state, action) => {
      state.tweets.push(action.payload)
    },
  },
})

export default tweetsSlice.reducer
export const { like, addTweet } = tweetsSlice.actions
