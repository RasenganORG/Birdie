import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, List, Skeleton, Spin } from "antd"
import {
  CommentOutlined,
  HeartOutlined,
  RetweetOutlined,
  LoadingOutlined,
} from "@ant-design/icons"
import { useNavigate, Link } from "react-router-dom"
import TweetCommentModal from "./TweetCommentModal"
import { likeTweet } from "./tweetsSlice"
import { getUserById } from "../users/usersSlice"

function TweetsList({ tweets }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleGoToTweet = (tweet) => navigate(`/tweets/${tweet.id}`)
  const handleLikeTweet = (tweetId) => dispatch(likeTweet(tweetId))
  // const handleRetweetTweet = (tweetId) => dispatch(retweet(tweetId))
  const { isLoading } = useSelector((state) => state.tweets)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalTweet, setModalTweet] = useState({
    id: "",
    parentId: "",
    user: "",
    text: "",
  })

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    //
    <>
      <List
        loading={isLoading}
        itemLayout='vertical'
        dataSource={tweets}
        style={{ textAlign: "start" }}
        renderItem={(tweet, index) => (
          <List.Item
            actions={[
              <a key='list-loadmore-edit'>
                <HeartOutlined
                  style={{ fontSize: "20px" }}
                  onClick={() => handleLikeTweet(tweet.id)}
                />{" "}
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
                  <Link
                    to={`/profile/${tweet.userId}`}
                    style={{ marginBottom: "0" }}
                  >
                    {tweet.username}
                  </Link>
                }
              />
            </Skeleton>
            <div onClick={() => handleGoToTweet(tweet)}>{tweet.text}</div>
          </List.Item>
        )}
      />
      {isModalVisible && (
        <TweetCommentModal
          isModalVsible={isModalVisible}
          modalTweet={modalTweet}
          handleCancel={handleCancel}
        />
      )}
    </>
  )
}

export default TweetsList
