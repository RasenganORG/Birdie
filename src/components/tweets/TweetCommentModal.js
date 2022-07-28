import React from "react"
import { Avatar, Comment, Button, Input, Form, Modal } from "antd"
import { useState } from "react"
const { TextArea } = Input

function CommentModal({ isModalVsible, handleOk, handleCancel, modalTweet }) {
  const [tweetReply, setTweetReply] = useState({
    user: "",
    text: "",
    likes: "",
    retweets: "",
    replies: "",
    thumbnail: "https://joeschmoe.io/api/v1/random",
  })
  return (
    <Modal
      visible={isModalVsible}
      onOk={() => handleOk(tweetReply)}
      onCancel={handleCancel}
      footer={[]}
    >
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
      <Comment
        author={<a>Han Solo</a>}
        avatar={
          <Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />
        }
        content={
          <Form>
            <Form.Item>
              {/* <TextArea rows={2} placeholder='Tweet your reply' /> */}
              <TextArea
                value={tweetReply.text}
                placeholder="What's happening?"
                data-cy='commentmodal--textarea'
                // style={{
                //   backgroundColor: "#021e39",
                // }}
                onChange={(e) =>
                  setTweetReply({ ...tweetReply, text: e.target.value })
                }
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType='submit'
                type='primary'
                onClick={() => handleOk(tweetReply)}
              >
                Reply
              </Button>
            </Form.Item>
          </Form>
        }
      />
    </Modal>
  )
}

export default CommentModal
