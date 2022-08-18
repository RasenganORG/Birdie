import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import AddTweet from "./AddTweet"
import TweetsList from "./TweetsList"
import { getTweetsForHome } from "./tweetsSlice"
import { Divider } from "antd"

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
    <div style={{ padding: "10px 20px" }}>
      <AddTweet parentId={null} />
      <Divider style={{ marginTop: "0" }} />
      <TweetsList tweets={tweets} />
    </div>
  )
}

export default Tweets
