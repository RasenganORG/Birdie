import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import AddTweet from "./AddTweet"
import TweetsList from "./TweetsList"
import { getTweetsForHome } from "./tweetsSlice"

function Tweets() {
  const dispatch = useDispatch()
  const { tweets } = useSelector((state) => state.tweets)
  const { user } = useSelector((state) => state.auth)

  console.log({ user })

  useEffect(() => {
    console.log("in uE")
    dispatch(getTweetsForHome(user.id))
  }, [])

  return (
    <>
      <AddTweet parentId={null} />
      <h1>List of tweets</h1>
      <TweetsList tweets={tweets} />
    </>
  )
}

export default Tweets
