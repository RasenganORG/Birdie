import React from "react"
import { like, retweet } from "./tweetsSlice"
import { useDispatch } from "react-redux"
import { Avatar, List, Skeleton } from "antd"
import {
  CommentOutlined,
  HeartOutlined,
  RetweetOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
// import TweetCommentModal from "./TweetCommentModal"

function TweetsList({ tweets }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleGoToTweet = (tweet) => navigate(`/tweets/${tweet.id}`)
  const handleLikeTweet = (tweetId) => dispatch(like(tweetId))
  const handleRetweetTweet = (tweetId) => dispatch(retweet(tweetId))

  return (
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
            <a key='list-loadmore-edit'>
              <CommentOutlined style={{ fontSize: "20px" }} />{" "}
              {tweet.replies.length}
            </a>,
          ]}
        >
          <Skeleton avatar title={false} loading={tweet.loading} active>
            <List.Item.Meta
              style={{ textAlign: "start" }}
              avatar={<Avatar src={tweet.thumbnail} />}
              title={<a href='https://ant.design'>{tweet.user}</a>}
            />
          </Skeleton>
          <div onClick={() => handleGoToTweet(tweet)}>{tweet.text}</div>
        </List.Item>
      )}
    />
    // {isModalVisible && (
    //     <TweetCommentModal
    //       isModalVsible={isModalVisible}
    //       modalTweet={modalTweet}
    //       handleOk={handleOk}
    //       handleCancel={handleCancel}
    //     />
    //   )}
  )
}

export default TweetsList
