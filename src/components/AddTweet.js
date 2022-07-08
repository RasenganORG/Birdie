import "antd/dist/antd.min.css"
import "../index.css"
import { Button, Comment, Form, Input, Avatar, Row, Col } from "antd"
import { useState } from "react"
const { TextArea } = Input

function AddTweet() {
  const [value, setValue] = useState("")
  return (
    <div
    // className='site-layout-background'
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
            <Row gutter={16}>
              <Col span={22}>
                <Form.Item>
                  <TextArea
                    value={value}
                    placeholder="What's happening?"
                    onChange={(e) => setValue(e.target.value)}
                    autoSize={{
                      minRows: 3,
                      maxRows: 5,
                    }}
                  />
                </Form.Item>
              </Col>

              <Col span={2}>
                <Form.Item>
                  <Button htmlType='submit' type='primary'>
                    Tweet
                  </Button>
                </Form.Item>
              </Col>
            </Row>

            <hr />
          </Form>
        }
      />
    </div>
  )
}

export default AddTweet
