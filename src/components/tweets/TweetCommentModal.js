import React from "react"
import { Avatar, Comment, Modal } from "antd"
import AddTweet from "./AddTweet"

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

      <AddTweet parentId={modalTweet.id} />
    </Modal>
  )
}

export default TweetCommentModal
