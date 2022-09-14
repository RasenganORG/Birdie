import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getChatById, getMessages } from "./chatSlice"
import { Avatar, Input, Button, Form, Row, Col, Typography } from "antd"
import { addMessage, setMessages } from "./chatSlice"
import { io } from "socket.io-client"
import "./Chat.css"
import "./scrollbar.css"
import moment from "moment"

const { Text } = Typography

function Conversation() {
  const dispatch = useDispatch()
  const params = useParams()
  const chatId = params.chatId
  const { user } = useSelector((state) => state.auth)
  const { currentChat, messages, currentUser } = useSelector(
    (state) => state.chats
  )
  const [form] = Form.useForm()
  const [sendMessage, setSendMessage] = useState(null)
  const [receivedMessage, setReceivedMessage] = useState(null)
  const socket = useRef()
  const scroll = useRef()

  useEffect(() => {
    socket.current = io("http://localhost:5000")
    socket.current.emit("new-user-add", user.id)
    socket.current.on("get-users", (users) => {
      console.log(users)
    })
  }, [user])

  // sends a message to the socket whenever we have a message to send
  useEffect(() => {
    if (sendMessage != null) {
      socket.current.emit("send-message", sendMessage)
      console.log("sending message", sendMessage)
    }
  }, [sendMessage])

  // receives the message sent from the other user
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceivedMessage(data)
    })
  }, [])

  // sets the message in the state whenever we received a message
  useEffect(() => {
    // const date = new Date().toUTCString()
    console.log({ receivedMessage })
    if (receivedMessage !== null && receivedMessage.receiverId === user.id) {
      const timeNow = moment().unix()
      console.log({ timeNow })
      const data = {
        id: "now",
        chatId: currentChat.id,
        senderId: currentUser.id,
        text: receivedMessage.message,
        createdAt: timeNow,
        // createdAt: date,
      }
      dispatch(setMessages(data))
    }
  }, [receivedMessage])

  useEffect(() => {
    const data = {
      chatId,
      userId: user.id,
    }
    dispatch(getChatById(data))
    dispatch(getMessages(chatId))
  }, [chatId])

  const scrollToBottom = () => {
    // eslint-disable-next-line no-unused-expressions
    scroll.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const onFinish = (values) => {
    const data = {
      senderId: user.id,
      text: values.message.text,
      chatId,
    }
    const receiverId = currentUser.id

    dispatch(addMessage(data))
    setSendMessage({ message: values.message.text, receiverId })
    form.resetFields()
  }

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      {messages.length > 0 && currentUser && (
        <div className='chatArea scrollbar'>
          {messages.map((message) => (
            <div
              ref={scroll}
              className={
                message.senderId === user.id
                  ? "message sent"
                  : "message received"
              }
            >
              <Avatar
                size={40}
                src={
                  message.senderId === user.id
                    ? user.avatar
                    : currentUser.avatar
                }
              />
              <p>
                {message.text}{" "}
                <Text
                  type='secondary'
                  style={{
                    display: "inline",
                    fontSize: "11px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "300",
                      display: "inline",
                      fontSize: "12px",
                      paddingLeft: "1rem",
                    }}
                  >
                    {moment(message.createdAt, "X").format("HH:mm")}
                  </span>
                </Text>
              </p>
            </div>
          ))}
        </div>
      )}
      {messages.length == 0 && (
        // && currentUser
        <div
          style={{
            padding: "25% 25%",
            textAlign: "center",
          }}
          className='chatArea'
        >
          <p
            style={{
              textAlign: "center",
            }}
          >
            There are no messages in this chat
          </p>
        </div>
      )}
      <Form
        form={form}
        name='addMessage'
        initialValues={{ newMessage: "" }}
        onFinish={onFinish}
        className='message-input'
      >
        <Row gutter={16}>
          <Col span={20}>
            <Form.Item
              name={["message", "text"]}
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <Input
                placeholder='Type your message'
                className='message message-input-area'
                rules={[
                  {
                    required: true,
                    message: "Please enter a message.",
                    type: "text",
                  },
                ]}
              />
            </Form.Item>
          </Col>

          <Col span={1}>
            <Form.Item>
              <Button htmlType='submit' shape='round' type='primary'>
                Send
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Conversation
