import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, List, Skeleton, Spin } from "antd"
import {
  CommentOutlined,
  HeartOutlined,
  RetweetOutlined,
  LoadingOutlined,
  HeartTwoTone,
} from "@ant-design/icons"
import { useNavigate, Link } from "react-router-dom"
import TweetCommentModal from "./TweetCommentModal"
import { likeTweet, dislikeTweet, addLike, deleteLike } from "./tweetsSlice"
import { getUserById } from "../users/usersSlice"

function Tweet({
  tweet,
  isModalVisible,
  setIsModalVisible,
  handleCancel,
  setModalTweet,
}) {
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
            <HeartTwoTone
              style={{ fontSize: "20px" }}
              twoToneColor='#eb2f96'
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
