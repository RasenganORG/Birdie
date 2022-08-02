import React from "react"
import { Avatar, Comment, Button, Input, Form, Modal } from "antd"
import { useState } from "react"
import AddTweet from "./AddTweet"

const { TextArea } = Input

function TweetCommentModal({ isModalVsible, handleCancel, modalTweet }) {
  return (
    <Modal visible={isModalVsible} onCancel={handleCancel} footer={[]}>
      <Comment
        author={<a>{modalTweet.user}</a>}
        avatar={<Avatar src={modalTweet.thumbnail} alt='Han Solo' />}
        content={
          <div>
            <p>{modalTweet.text}</p>
            <hr />
          </div>
        }
      ></Comment>

      <AddTweet tweetId={modalTweet.id} />
    </Modal>
  )
}

export default TweetCommentModal
