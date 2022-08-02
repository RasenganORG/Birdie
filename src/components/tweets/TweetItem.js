import { useParams } from "react-router-dom"
import React from "react"
import { useSelector } from "react-redux"
import TweetsList from "./TweetsList"
import AddTweet from "./AddTweet"

function TweetItem() {
  const params = useParams()
  const tweetId = params.tweetId
  const parentTweet = useSelector((state) => state.tweets.tweets).filter(
    (tweet) => {
      console.log({ tweetId, tweet })
      return tweet.id.toString() === tweetId.toString()
    }
  )
  console.log({ parentTweet })

  const tweetReplies = useSelector(
    (state) => state.tweets.tweets
  ).filter((tweet) => parentTweet[0].replies.includes(tweet.id))

  return (
    <>
      <TweetsList tweets={parentTweet} />
      <AddTweet tweetId={tweetId} />
      <TweetsList tweets={tweetReplies} />
    </>
  )
}

export default TweetItem
