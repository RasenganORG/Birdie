import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, List, Skeleton } from "antd"
import {
  CommentOutlined,
  HeartOutlined,
  RetweetOutlined,
  HeartFilled,
} from "@ant-design/icons"
import { useNavigate, Link } from "react-router-dom"
import { likeTweet, dislikeTweet, addLike, deleteLike } from "./tweetsSlice"

function Tweet({ tweet, setIsModalVisible, setModalTweet }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const handleGoToTweet = (tweet) => navigate(`/tweets/${tweet.id}`)
  const handleLikeTweet = (tweetId) => {
    const data = {
      userId: user.id,
      likedTweetId: tweet.id,
    }
    setIsLiked(true)
    dispatch(likeTweet(tweet.id))
    dispatch(addLike(data))
  }
  const handleDislikeTweet = (tweetId) => {
    const data = {
      userId: user.id,
      likedTweetId: tweet.id,
    }
    setIsLiked(false)
    dispatch(dislikeTweet(tweetId))
    dispatch(deleteLike(data))
  }
  // const handleRetweetTweet = (tweetId) => dispatch(retweet(tweetId))
  const [isLiked, setIsLiked] = useState(tweet.isLiked)
  console.log("tweet.id : " + tweet.id + isLiked)

  return (
    <List.Item
      actions={[
        <a key='list-loadmore-edit'>
          {isLiked && (
            <HeartFilled
              style={{ fontSize: "20px", color: "#e63946" }}
              onClick={() => handleDislikeTweet(tweet.id)}
            />
          )}
          {!isLiked && (
            <HeartOutlined
              style={{ fontSize: "20px" }}
              onClick={() => handleLikeTweet(tweet.id)}
            />
          )}{" "}
          {tweet.likes}
        </a>,
        <a key='list-loadmore-edit'>
          <RetweetOutlined
            style={{ fontSize: "20px" }}
            rotate='90'
            // onClick={() => handleRetweetTweet(tweet.id)}
          />{" "}
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
