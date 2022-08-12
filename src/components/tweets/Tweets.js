import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import AddTweet from "./AddTweet"
import TweetsList from "./TweetsList"
import { getTweets } from "./tweetsSlice"

function Tweets() {
  const dispatch = useDispatch()
  const { tweets } = useSelector((state) => state.tweets)
  const homeTweets = tweets.filter((tweet) => tweet.parentId === null)

  useEffect(() => {
    dispatch(getTweets())
  }, [])

  return (
    <>
      <AddTweet parentId={null} />
      <h1>List of tweets</h1>
      <TweetsList tweets={homeTweets} />
    </>
  )
}

export default Tweets
