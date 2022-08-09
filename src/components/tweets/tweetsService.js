import axios from "axios"

const API_TWEETS_URL = "http://localhost:8080/api/tweets/"
const API_TWEET_URL = "http://localhost:8080/api/tweet/"

const getTweets = async () => {
  const response = await axios.get(API_TWEETS_URL)

  return response.data
}

const getTweetById = async (tweetId) => {
  const response = await axios.get(`${API_TWEET_URL}${tweetId}`)

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

  return response.data
}

const deleteTweet = async (tweetId) => {
  const response = await axios.delete(`${API_TWEET_URL}${tweetId}`)

  return response.data
}

const updateTweet = async (tweetId) => {
  const response = await axios.put(`${API_TWEETS_URL}${tweetId}`)

  return response.data
}

const tweetsService = {
  getTweets,
  getTweetById,
  getReplies,
  addTweet,
  deleteTweet,
  updateTweet,
}

export default tweetsService
