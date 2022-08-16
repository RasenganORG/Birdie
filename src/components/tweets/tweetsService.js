import axios from "axios"

const API_TWEETS_URL = "http://localhost:8080/api/tweets/"
const API_TWEET_URL = "http://localhost:8080/api/tweet/"
const API_TWEETS_BY_USER_ID_URL = "http://localhost:8080/api/tweetsByUserId/"
const API_TWEETS_HOME_URL = "http://localhost:8080/api/tweetsForHome/"

const getTweets = async () => {
  const response = await axios.get(API_TWEETS_URL)

  return response.data
}

const getTweetById = async (tweetId) => {
  const response = await axios.get(`${API_TWEET_URL}${tweetId}`)

  return response.data
}

const getTweetsByUserId = async (userId) => {
  const response = await axios.get(`${API_TWEETS_BY_USER_ID_URL}${userId}`)
  console.log("response.data", response.data)

  return response.data
}

const getTweetsForHome = async (userId) => {
  const response = await axios.get(`${API_TWEETS_HOME_URL}${userId}`)
  console.log("response.data", response.data)

  return response.data
}

const getReplies = async (tweetId) => {
  const response = await axios.get(`${API_TWEETS_URL}${tweetId}`)

  return response.data
}

const addTweet = async (tweetData) => {
  const response = await axios.post(API_TWEETS_URL, tweetData, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
  })

  if (response.data.id) {
    localStorage.setItem("addedTweetId", JSON.stringify(response.data.id))
  }
  console.log("response.data", response.data)
  return response.data
}

const deleteTweet = async (tweetId) => {
  const response = await axios.delete(`${API_TWEET_URL}${tweetId}`)

  return response.data
}

const likeTweet = async (tweetId) => {
  const response = await axios.put(`${API_TWEET_URL}${tweetId}`)

  return response.data
}

const tweetsService = {
  getTweets,
  getTweetById,
  getReplies,
  addTweet,
  deleteTweet,
  likeTweet,
  getTweetsByUserId,
  getTweetsForHome,
}

export default tweetsService
