import "antd/dist/antd.min.css"
import "../index.css"
import { Button, Comment, Form, Input, Avatar } from "antd"
import { Col, Row } from "antd"
const { TextArea } = Input

function AddTweet() {
  return (
    <div
      className='site-layout-background'
      style={{
        padding: "24px 0",
      }}
    >
      <Comment
        className='align-tweets'
        author={<a>Han Solo</a>}
        avatar={
          <Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />
        }
        content={
          // <Input placeholder="sWhat's happening?" bordered={true} style={{
          //     height: 80,
          //     width: '50%'
          //     }}/>
          <Form>
            <Form.Item>
              <TextArea rows={2} placeholder="What's happening?" />
            </Form.Item>

            <Form.Item>
              <Button htmlType='submit' type='primary'>
                Tweet
              </Button>
            </Form.Item>
            <hr />
          </Form>
        }
      />
    </div>
  )
}

export default AddTweet
