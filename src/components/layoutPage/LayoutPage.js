import React, { useState, useEffect } from "react"
import "antd/dist/antd.css"
import "./layout.css"
import { Layout, Menu, Input, Row, Col, AutoComplete } from "antd"
import { Outlet, NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getUsersByUsername } from "/home/ana/Documents/GitHub/Birdie/src/components/users/usersSlice.js"

let activeClassName = "underline"
const { Header, Content, Footer } = Layout
const { Search } = Input
const menuItems = [
  {
    key: "home",
    label: (
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        {/* <Button>Tweets</Button> */}
        Tweets
      </NavLink>
    ),
  },
  {
    key: "profile",
    label: (
      <NavLink
        to='/profile'
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        {/* <Button>Profile</Button> */}
        Profile
      </NavLink>
    ),
  },
  {
    key: "tweetId",
    label: (
      <NavLink
        to='/tweets/1'
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        {/* <Button>tweet1</Button> */}
        Messages
      </NavLink>
    ),
  },
]

function LayoutPage() {
  const navigate = useNavigate()

  const onSearch = (value) => {
    console.log(value)
    navigate(`/search?q=${value}`)
    // dispatch(getUsersByUsername(value))
    // console.log({ searchedUsers })
    // console.log({ options })
    // setOptions([usernames])
  }

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        {/* <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={["2"]}
        items={menuItems}
      /> */}
        {/* {menuItems.map((item) => item.label)} */}
        <Row>
          <Col span={9}>
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={"home"}
              items={menuItems}
            />
          </Col>
          <Col span={6} style={{ marginTop: "12px" }}>
            <Search
              className='navbar--search'
              placeholder='Search Twitter'
              enterButton='Search'
              size='large'
              onSearch={onSearch}
            />
          </Col>
          <Col span={9}> </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className='site-layout-content'>
          <Outlet />
        </div>
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
export default LayoutPage
