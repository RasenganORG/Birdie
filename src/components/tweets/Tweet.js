import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, List, Skeleton, Typography } from "antd"
import {
  CommentOutlined,
  HeartOutlined,
  RetweetOutlined,
  HeartFilled,
} from "@ant-design/icons"
import { useNavigate, Link } from "react-router-dom"
import {
  likeTweet,
  dislikeTweet,
  addLike,
  deleteLike,
  addRetweet,
  deleteRetweet,
  setIsLiked,
  setIsRetweeted,
  unretweetTweet,
  retweetTweet,
} from "./tweetsSlice"

const { Text } = Typography

function Tweet({ tweet, setIsModalVisible, setModalTweet, index }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const handleGoToTweet = (tweet) => navigate(`/tweets/${tweet.id}`)

  const handleLikeTweet = (tweetId, value) => {
    const data = {
      userId: user.id,
      likedTweetId: tweet.id,
    }
    dispatch(
      setIsLiked({
        index: index,
        value: value,
        tweetId: tweet.id,
        type: tweet.isRetweet === true ? "retweet" : "tweet",
      })
    )

    if (value === true) {
      dispatch(likeTweet(tweetId))
      dispatch(addLike(data))
    } else {
      dispatch(dislikeTweet(tweetId))
      dispatch(deleteLike(data))
    }
  }

  const handleRetweetTweet = (tweetId, value) => {
    dispatch(
      setIsRetweeted({
        index: index,
        tweetId: tweet.id,
        value: value,
        type: tweet.isRetweet === true ? "retweet" : "tweet",
      })
    )
    const data = {
      userId: user.id,
      retweetedTweetId: tweet.id,
    }

    if (value === true) {
      dispatch(retweetTweet(tweet.id))
      dispatch(addRetweet(data))
    } else {
      dispatch(unretweetTweet(tweet.id))
      dispatch(deleteRetweet(data))
    }
  }

  return (
    <List.Item
      actions={[
        <a key='list-loadmore-edit'>
          {tweet.isLiked && (
            <HeartFilled
              style={{ fontSize: "20px", color: "#e63946" }}
              onClick={() => handleLikeTweet(tweet.id, false)}
            />
          )}
          {!tweet.isLiked && (
            <HeartOutlined
              style={{ fontSize: "20px" }}
              onClick={() => handleLikeTweet(tweet.id, true)}
            />
          )}{" "}
          {tweet.likes}
        </a>,
        <a key='list-loadmore-edit'>
          {tweet.isRetweetedByHomeUser && (
            <RetweetOutlined
              style={{ fontSize: "20px", color: "green" }}
              onClick={() => handleRetweetTweet(tweet.id, false)}
            />
          )}
          {!tweet.isRetweetedByHomeUser && (
            <RetweetOutlined
              style={{ fontSize: "20px" }}
              onClick={() => handleRetweetTweet(tweet.id, true)}
            />
          )}{" "}
          {tweet.retweets}
        </a>,
        <a
          key='list-loadmore-edit'
          onClick={() => {
            setIsModalVisible(true)
            setModalTweet({
              id: tweet.id,
              username: tweet.username,
              text: tweet.text,
              avatar: tweet.avatar,
            })
          }}
        >
          <CommentOutlined style={{ fontSize: "20px" }} />{" "}
        </a>,
      ]}
    >
      {tweet.isRetweet === true && (
        <Text type='secondary'>
          <RetweetOutlined
            style={{ fontSize: "20px" }}
            onClick={() => handleRetweetTweet(tweet.id)}
          />
          {tweet.retweetedUsername} retweeted
        </Text>
      )}
      <Skeleton avatar title={false} loading={tweet.loading} active>
        <List.Item.Meta
          style={{ textAlign: "start" }}
          avatar={<Avatar src={tweet.avatar} />}
          // description={tweet.name}
          title={
            <Link to={`/profile/${tweet.userId}`} style={{ marginBottom: "0" }}>
              {tweet.name} <Text type='secondary'>@{tweet.username}</Text>
            </Link>
          }
        />
      </Skeleton>
      <div onClick={() => handleGoToTweet(tweet)}>{tweet.text}</div>
    </List.Item>
  )
}

export default Tweet
