import { useParams } from "react-router-dom"
import React from "react"

function TweetItem() {
  const params = useParams()
  const tweetId = params.tweetId
  console.log(tweetId)

  return <h1>View Tweet {tweetId}</h1>
}

export default TweetItem
