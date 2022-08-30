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

  const handleLikeTweet = (tweetId) => {
    const data = {
      userId: user.id,
      likedTweetId: tweet.id,
    }
    dispatch(
      setIsLiked({
        index: index,
        value: true,
        type: tweet.isRetweet === true ? "retweet" : "tweet",
      })
    )
    dispatch(likeTweet(tweet.id))
    dispatch(addLike(data))
  }

  const handleDislikeTweet = (tweetId) => {
    const data = {
      userId: user.id,
      likedTweetId: tweet.id,
    }
    dispatch(
      setIsLiked({
        index: index,
        value: false,
        type: tweet.isRetweet === true ? "retweet" : "tweet",
      })
    )
    dispatch(dislikeTweet(tweetId))
    dispatch(deleteLike(data))
  }

  const handleRetweetTweet = (tweetId) => {
    dispatch(
      setIsRetweeted({
        index: index,
        value: true,
        type: tweet.isRetweet === true ? "retweet" : "tweet",
      })
    )
    const data = {
      userId: user.id,
      retweetedTweetId: tweet.id,
    }
    dispatch(retweetTweet(tweet.id))
    dispatch(addRetweet(data))
  }

  const handleDeleteRetweetTweet = (tweetId) => {
    dispatch(
      setIsRetweeted({
        index: index,
        value: false,
        type: tweet.isRetweet === true ? "retweet" : "tweet",
      })
    )
    const data = {
      userId: user.id,
      retweetedTweetId: tweet.id,
    }
    dispatch(unretweetTweet(tweet.id))
    dispatch(deleteRetweet(data))
  }

  console.log("tweet.id : " + tweet.id + tweet.isLiked + "isLiked : ")

  return (
    <List.Item
      actions={[
        <a key='list-loadmore-edit'>
          {tweet.isLiked && (
            <HeartFilled
              style={{ fontSize: "20px", color: "#e63946" }}
              onClick={() => handleDislikeTweet(tweet.id)}
            />
          )}
          {!tweet.isLiked && (
            <HeartOutlined
              style={{ fontSize: "20px" }}
              onClick={() => handleLikeTweet(tweet.id)}
            />
          )}{" "}
          {tweet.likes}
        </a>,
        <a key='list-loadmore-edit'>
          {tweet.isRetweetedByHomeUser && (
            <RetweetOutlined
              style={{ fontSize: "20px", color: "green" }}
              onClick={() => handleDeleteRetweetTweet(tweet.id)}
            />
          )}
          {!tweet.isRetweetedByHomeUser && (
            <RetweetOutlined
              style={{ fontSize: "20px" }}
              onClick={() => handleRetweetTweet(tweet.id)}
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
              user: tweet.user,
              text: tweet.text,
              replies: tweet.replies,
            })
          }}
        >
          <CommentOutlined style={{ fontSize: "20px" }} />{" "}
        </a>,
      ]}
    >
      {tweet.isRetweet === true && (
        <Text type='secondary'>retweeted by {tweet.retweetedUsername}</Text>
      )}
      <Skeleton avatar title={false} loading={tweet.loading} active>
        <List.Item.Meta
          style={{ textAlign: "start" }}
          avatar={<Avatar src={tweet.avatar} />}
          description={tweet.name}
          title={
            <Link to={`/profile/${tweet.userId}`} style={{ marginBottom: "0" }}>
              {tweet.username}
            </Link>
          }
        />
      </Skeleton>
      <div onClick={() => handleGoToTweet(tweet)}>{tweet.text}</div>
    </List.Item>
  )
}

export default Tweet
