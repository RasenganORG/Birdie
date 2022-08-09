import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import AddTweet from "./AddTweet"
import TweetsList from "./TweetsList"
import { getTweets } from "./tweetsSlice"
import {
  getUsers,
  getUsersByUsername,
} from "/home/ana/Documents/GitHub/Birdie/src/components/users/usersSlice.js"

function Tweets() {
  const dispatch = useDispatch()
  const { tweets } = useSelector((state) => state.tweets)

  const homeTweets = tweets.filter((tweet) => tweet.parentId === null)

  useEffect(() => {
    dispatch(getTweets())
  }, [])

  useEffect(() => {
    console.log("in useEffect get users")
    dispatch(getUsers())
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
