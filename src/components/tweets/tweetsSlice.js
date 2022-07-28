import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tweets: [
    {
      user: "@ana",
      name: "Ana Oprea",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing el",
      likes: "2",
      retweets: "3",
      replies: "4",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    },
    {
      user: "@alex",
      name: "Alex Medesan",
      text:
        "lorem ipsum dolor sit amet, consect et, adipiscing el sit amet, consectetur adipiscing",
      likes: "2",
      retweets: "5",
      replies: "4",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg",
    },
    {
      user: "@mimi",
      name: "Mimi Cretu",
      text: "lorem ipsum dolor sit amet",
      likes: "2",
      retweets: "3",
      replies: "5",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/30.jpg",
    },
    {
      user: "@esteban",
      name: "Esteban Butura",
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
    retweet: (state, action) => {
      state.tweets[action.payload].retweets++
    },
    reply: (state, action) => {
      state.tweets[action.payload].replies++
    },
    addTweet: (state, action) => {
      state.tweets.push(action.payload)
      state.tweets[action.payload].replies++
    },
  },
})

export default tweetsSlice.reducer
export const { like, retweet, reply, addTweet } = tweetsSlice.actions
