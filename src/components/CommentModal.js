import { Avatar, Comment, Button, Input, Form, Modal } from "antd"
import { useState } from "react"
const { TextArea } = Input

function CommentModal({ isModalVsible, handleOk, handleCancel }) {
  const [value, setValue] = useState("")
  return (
    <Modal
      visible={isModalVsible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <Comment
        author={<a>Han Solo</a>}
        avatar={
          <Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />
        }
        content={
          <div>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure).
            </p>
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
                value={value}
                placeholder="What's happening?"
                // style={{
                //   backgroundColor: "#021e39",
                // }}
                onChange={(e) => setValue(e.target.value)}
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button htmlType='submit' type='primary'>
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
