import React from "react"
import "antd/dist/antd.css"
import "./layout.css"
import { Layout, Menu, Button, Input, Row, Col } from "antd"
import { Outlet, NavLink } from "react-router-dom"

let activeClassName = "underline"
const { Search } = Input
const { Header, Content, Footer } = Layout
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

const LayoutPage = () => (
  <Layout className='layout'>
    <Header>
      <Row>
        <Col span={2}>
          <div className='logo' />
        </Col>
        <Col span={8}>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={["2"]}
            items={menuItems}
          />
        </Col>
        <Col span={4}>
          <Search
            className='navbar--search'
            placeholder='Search Twitter'
            allowClear
            enterButton='Search'
            size='large'
            style={{ paddingTop: "12px" }}
            // onSearch={onSearch}
          />
        </Col>
        <Col span={7}></Col>
      </Row>

      {/* {menuItems.map((item) => item.label)} */}
    </Header>
    <Content
      style={{
        padding: "0 50px",
        // height: "100vh",
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

export default LayoutPage
