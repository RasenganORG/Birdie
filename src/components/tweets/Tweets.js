import React from "react"
import { useSelector } from "react-redux"
import AddTweet from "./AddTweet"
import TweetsList from "./TweetsList"

function Tweets() {
  const tweets = useSelector((state) => state.tweets.tweets)

  return (
    <>
      <AddTweet />
      <h1>List of tweets</h1>
      <TweetsList tweets={tweets} />
    </>
  )
}

export default Tweets
