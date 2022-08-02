import React from "react"
import { useSelector } from "react-redux"
import AddTweet from "./AddTweet"
import TweetsList from "./TweetsList"

function Tweets() {
  const tweets = useSelector((state) => state.tweets.tweets)

  const replies = useSelector((state) => state.tweets.tweets).reduce(
    (accumulator, currentTweet) => {
      return [...accumulator, ...currentTweet.replies]
    },
    []
  )

  const homeTweets = tweets.filter((tweet) => !replies.includes(tweet.id))

  return (
    <>
      <AddTweet />
      <h1>List of tweets</h1>
      <TweetsList tweets={homeTweets} />
    </>
  )
}

export default Tweets
