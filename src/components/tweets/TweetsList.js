import React, { useState } from "react"
import { like, retweet, addTweet, addReply } from "./tweetsSlice"
import { useDispatch } from "react-redux"
import { Avatar, List, Skeleton } from "antd"
import {
  CommentOutlined,
  HeartOutlined,
  RetweetOutlined,
} from "@ant-design/icons"
import { useNavigate, Link } from "react-router-dom"
import TweetCommentModal from "./TweetCommentModal"

function TweetsList({ tweets }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleGoToTweet = (tweet) => navigate(`/tweets/${tweet.id}`)
  const handleLikeTweet = (tweetId) => dispatch(like(tweetId))
  const handleRetweetTweet = (tweetId) => dispatch(retweet(tweetId))

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalTweet, setModalTweet] = useState({
    id: "",
    user: "",
    text: "",
    replies: [],
  })

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <List
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
                  onClick={() => handleRetweetTweet(tweet.id)}
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
                {tweet.replies.length}
              </a>,
            ]}
          >
            <Skeleton avatar title={false} loading={tweet.loading} active>
              <List.Item.Meta
                style={{ textAlign: "start" }}
                avatar={<Avatar src={tweet.thumbnail} />}
                title={
                  <Link to='/profile' style={{ marginBottom: "0" }}>
                    {tweet.user}
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
          // handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
    </>
  )
}

export default TweetsList
