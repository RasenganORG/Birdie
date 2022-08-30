import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import AddTweet from "./AddTweet"
import TweetsList from "./TweetsList"
import { getTweetsForHome, getRetweetsForHome } from "./tweetsSlice"
import { Divider } from "antd"

function Tweets() {
  const dispatch = useDispatch()
  const { tweets, retweets } = useSelector((state) => state.tweets)
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getTweetsForHome(user.id))
    dispatch(getRetweetsForHome(user.id))
  }, [])

  return (
    <div style={{ padding: "10px 20px" }}>
      <AddTweet parentId={null} />
      <Divider style={{ marginTop: "0" }} />
      <TweetsList tweets={tweets} />
      <TweetsList tweets={retweets} />
    </div>
  )
}

export default Tweets
