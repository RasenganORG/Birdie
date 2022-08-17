import React, { useState } from "react"
import { Avatar, Button, Comment, Row, Col, Input, Form } from "antd"
import { addTweet } from "./tweetsSlice"
import { useDispatch, useSelector } from "react-redux"

const { TextArea } = Input

function AddTweet({ parentId }) {
  const [form] = Form.useForm()
  const [tweetText, setTweetText] = useState("")
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const handleSubmit = () => {
    dispatch(
      addTweet({
        parentId: parentId === null ? null : parentId,
        userId: user.id,
        text: tweetText,
        likes: "0",
        retweets: "0",
        liked: false,
      })
    )

    form.resetFields()
  }

  return (
    <Comment
      className='align-tweets'
      author={<a>{user.username}</a>}
      avatar={<Avatar src={user.avatar} alt='Han Solo' />}
      content={
        <Form form={form} name='addTweet' initialValues={{ tweetText: "" }}>
          <Row gutter={16}>
            <Col span={22}>
              <Form.Item name='tweetText'>
                <TextArea
                  value={tweetText}
                  data-cy='addtweet--textarea'
                  placeholder="What's happening?"
                  onChange={(e) => setTweetText(e.target.value)}
                  autoSize={{
                    minRows: 3,
                    maxRows: 5,
                  }}
                />
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item>
                <Button htmlType='submit' type='primary' onClick={handleSubmit}>
                  Tweet
                </Button>
              </Form.Item>
            </Col>
          </Row>

          <hr />
        </Form>
      }
    />
  )
}

export default AddTweet
