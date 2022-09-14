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

  const usersList = users.map((elem, index) => {
    return {
      key: elem.chatId,
      icon: (
        <Avatar
          size={50}
          src={elem.avatar}
          onClick={() => navigate(`/profile/${elem.userId}`)}
        />
      ),
      label: (
        <div
          style={{
            paddingLeft: "10px",
            fontSize: "20px",
          }}
          onClick={() => navigate(`/chat/${elem.chatId}`)}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          {elem.username}
        </div>
      ),
    }
  })

  console.log({ usersList })

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
          padding: "50px 0",
          margin: "0 10%",
        }}
      >
        <Layout
          className='site-layout-background'
          style={{
            padding: "0 0",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Sider className='site-layout-background' width={300}>
            {/* <h1
              style={{
                color: "black",
                background: "white",
                padding: "0",
                margin: "0 0 0 0",
              }}
            >
              Messages
            </h1> */}
            <Menu
              mode='inline'
              // defaultSelectedKeys={["1"]}
              style={{
                height: "100%",
                padding: "6px 0",
              }}
              items={usersList}
            />
          </Sider>
          <Content
            style={{
              padding: "0 0",
              // minHeight: "50vh",
              width: "100vw",
            }}
          >
            <div
              className='site-layout-content'
              style={{
                padding: "0 24px",
                minHeight: "90vh",
                height: "100%",
                // position: "absolute",
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Content>
      {/* <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>
  )
}

export default Chat
