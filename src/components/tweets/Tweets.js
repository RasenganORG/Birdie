import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { like, retweet, reply, addTweet } from "./tweetsSlice"
import { Avatar, List, Skeleton, Input, Space } from "antd"
import {
  CommentOutlined,
  HeartOutlined,
  RetweetOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons"
import TweetAddPost from "./TweetAddPost"
import TweetCommentModal from "./TweetCommentModal"

const count = 3
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

function Tweets() {
  const tweets = useSelector((state) => state.tweets.tweets)
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalTweet, setModalTweet] = useState({
    user: "",
    text: "",
    likes: "",
    retweets: "",
    replies: "",
    thumbnail: "",
  })

  const handleOk = (tweet) => {
    setIsModalVisible(false)
    console.log("Clicked")
    dispatch(addTweet(tweet))
    // dispatch(reply())
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <TweetAddPost />
      {/* <List
        bordered
        dataSource={tweets}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <a key='list-loadmore-edit' onClick={() => dispatch(like(index))}>
                <HeartOutlined style={{ fontSize: "20px" }} /> {item.likes}
              </a>,
              <a
                key='list-loadmore-edit'
                onClick={() => dispatch(retweet(index))}
              >
                <RetweetOutlined style={{ fontSize: "20px" }} rotate='90' />{" "}
                {item.retweets}
              </a>,
              <a
                key='list-loadmore-edit'
                // onClick={() => dispatch(reply(index))}
                onClick={() => {
                  setIsModalVisible(true)
                  setModalTweet({
                    user: item.user,
                    text: item.text,
                    thumbnail: item.thumbnail,
                  })
                }}
              >
                <CommentOutlined
                  // data-cy='tweetpost--comment'
                  style={{ fontSize: "20px" }}
                  // onClick={showModal}
                />{" "}
                {item.replies}
              </a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                style={{ textAlign: "start" }}
                avatar={<Avatar src={item.thumbnail} />}
                title={<Link to='/profile'>{item.user}</Link>}
                description={item.text}
              />
            </Skeleton>
          </List.Item>
        )}
      /> */}
      <List
        itemLayout='vertical'
        size='large'
        dataSource={tweets}
        style={{ textAlign: "start" }}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <a key='list-loadmore-edit' onClick={() => dispatch(like(index))}>
                <HeartOutlined style={{ fontSize: "20px" }} /> {item.likes}
              </a>,
              <a
                key='list-loadmore-edit'
                onClick={() => dispatch(retweet(index))}
              >
                <RetweetOutlined style={{ fontSize: "20px" }} rotate='90' />{" "}
                {item.retweets}
              </a>,
              <a
                key='list-loadmore-edit'
                // onClick={() => dispatch(reply(index))}
                onClick={() => {
                  setIsModalVisible(true)
                  setModalTweet({
                    user: item.user,
                    text: item.text,
                    thumbnail: item.thumbnail,
                  })
                }}
              >
                <CommentOutlined
                  // data-cy='tweetpost--comment'
                  style={{ fontSize: "20px" }}
                  // onClick={showModal}
                />{" "}
                {item.replies}
              </a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                style={{ textAlign: "start" }}
                avatar={<Avatar src={item.thumbnail} />}
                title={
                  <Link to='/profile' style={{ marginBottom: "0" }}>
                    {item.user}
                  </Link>
                }
                description={item.name}
              />
            </Skeleton>
            {item.text}
          </List.Item>
        )}
      />
      {isModalVisible && (
        <TweetCommentModal
          isModalVsible={isModalVisible}
          modalTweet={modalTweet}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
    </>
  )
}

export default Tweets
