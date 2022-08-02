import React from "react"
import { like } from "./tweetsSlice"
import { useDispatch } from "react-redux"
import { Typography, Avatar, Button, List, Skeleton } from "antd"
import { useNavigate } from "react-router-dom"

function TweetsList({ tweets }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleGoToTweet = (tweet) => navigate(`/tweets/${tweet.id}`)
  const handleLikeTweet = (tweetId) => dispatch(like(tweetId))

  return (
    <List
      bordered
      dataSource={tweets}
      renderItem={(tweet, index) => (
        <List.Item
          actions={[
            <a
              key='list-loadmore-edit'
              onClick={() => handleLikeTweet(tweet.id)}
            >
              like
            </a>,
          ]}
        >
          <Skeleton avatar title={false} loading={tweet.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={tweet.thumbnail} />}
              title={<a href='https://ant.design'>{tweet.user}</a>}
            />
            <div>likes:{tweet.likes}</div>
          </Skeleton>
          <div onClick={() => handleGoToTweet(tweet)}>{tweet.text}</div>
        </List.Item>
      )}
    />
  )
}

export default TweetsList
