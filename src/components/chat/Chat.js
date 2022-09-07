import React, { useEffect } from "react"
import "antd/dist/antd.css"
import { Layout, Menu, Avatar, Button } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { logout } from "/home/ana/Documents/GitHub/Birdie/src/components/auth/authSlice.js"
import { getUsers, getChatId } from "./chatSlice"

const { Header, Content, Footer, Sider } = Layout
let activeClassName = "underline"

function Chat() {
  let href = window.location.href.split("/")
  const { user } = useSelector((state) => state.auth)
  const { users } = useSelector((state) => state.chats)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const menuItems = [
    {
      key: "",
      label: (
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          onClick={() => (href = window.location.href.split("/"))}
        >
          {/* <Button>Tweets</Button> */}
          Tweets
        </NavLink>
      ),
    },
    {
      key: "profile",
      label: (
        <>
          <Avatar src={user.avatar} />{" "}
          <NavLink
            to={`/profile/${user.id}`}
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            onClick={() => (href = window.location.href.split("/"))}
          >
            {/* <Button>Profile</Button> */}
            Profile
          </NavLink>
        </>
      ),
    },
    {
      key: "chat",
      label: (
        <NavLink
          to='/chat'
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          onClick={() => (href = window.location.href.split("/"))}
        >
          {/* <Button>tweet1</Button> */}
          Messages
        </NavLink>
      ),
    },
    {
      key: "logout",
      label: (
        <Button
          ghost={true}
          style={{
            border: "none",
            color: "hsla(0,0%,100%,.65)",
          }}
          onClick={() => {
            dispatch(logout())
            navigate("/login")
          }}
        >
          Log Out
        </Button>
      ),
    },
  ]

  const items3 = users.map((elem, index) => {
    return {
      key: elem.chatId,
      icon: <Avatar src={elem.avatar} />,
      label: (
        <NavLink
          to={`/chat/${elem.chatId}`}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          {elem.username}
        </NavLink>
      ),
    }
  })

  console.log({ items3 })

  useEffect(() => {
    dispatch(getUsers(user.id))
  }, [])

  console.log({ users })

  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          selectedKeys={href[3]}
          items={menuItems}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          className='site-layout-background'
          style={{
            padding: "24px 0",
          }}
        >
          <Sider className='site-layout-background' width={200}>
            <Menu
              mode='inline'
              defaultSelectedKeys={["1"]}
              style={{
                height: "100%",
              }}
              items={items3}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: "90vh",
            }}
          >
            <div
              className='site-layout-content'
              style={{
                padding: "0 24px",
                minHeight: "90vh",
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default Chat
