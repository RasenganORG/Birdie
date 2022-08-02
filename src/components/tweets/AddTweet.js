import React, { useState } from "react"
import { Avatar, Button, Comment, Row, Col, Input, Form } from "antd"
import { like, retweet, reply, addTweet, addReply } from "./tweetsSlice"
import { useDispatch } from "react-redux"

const { TextArea } = Input

function TweetAddPost({ tweetId }) {
  const [tweetText, setTweetText] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = () => {
    const newTweetId = new Date().getTime()

    dispatch(
      addTweet({
        id: newTweetId,
        user: "@ana",
        text: tweetText,
        likes: "0",
        retweets: "0",
        replies: [],
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
      })
    )
    if (tweetId) {
      dispatch(
        addReply({
          tweetId,
          replyId: newTweetId,
        })
      )
    }
  }

  return (
    <Comment
      className='align-tweets'
      author={<a>Han Solo</a>}
      avatar={
        <Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />
      }
      content={
        <Form>
          <Row gutter={16}>
            <Col span={22}>
              <Form.Item>
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

export default TweetAddPost
