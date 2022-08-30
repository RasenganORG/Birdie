import React, { useState } from "react"
import { useSelector } from "react-redux"
import { List, Spin } from "antd"
import TweetCommentModal from "./TweetCommentModal"
import Tweet from "./Tweet"
import { LoadingOutlined } from "@ant-design/icons"

function TweetsList({ tweets }) {
  const { isLoading } = useSelector((state) => state.tweets)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalTweet, setModalTweet] = useState({
    id: "",
    username: "",
    text: "",
  })

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <List
        loading={isLoading}
        itemLayout='vertical'
        dataSource={tweets}
        style={{ textAlign: "start" }}
        renderItem={(tweet, index) => (
          <Tweet
            tweet={tweet}
            index={index}
            setIsModalVisible={setIsModalVisible}
            setModalTweet={setModalTweet}
          />
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
