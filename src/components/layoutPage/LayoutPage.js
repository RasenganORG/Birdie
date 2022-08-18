import React, { useState, useEffect } from "react"
import "antd/dist/antd.css"
import "./layout.css"
import { Layout, Menu, Input, Row, Col, Dropdown } from "antd"
import { Outlet, NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getUsersByUsername } from "/home/ana/Documents/GitHub/Birdie/src/components/users/usersSlice.js"

let activeClassName = "underline"
const { Header, Content, Footer } = Layout
const { Search } = Input

function LayoutPage() {
  const { user } = useSelector((state) => state.auth)
  const [searchItem, setSearchItem] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { searchedUsers, isLoading } = useSelector((state) => state.users)
  const [visible, setVisible] = useState(false)

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
          to={`/profile/${user.id}`}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          {/* <Button>Profile</Button> */}
          Profile
        </NavLink>
      ),
    },
    {
      key: "messages",
      label: (
        <NavLink
          to='/messages'
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          {/* <Button>tweet1</Button> */}
          Messages
        </NavLink>
      ),
    },
  ]

  useEffect(() => {
    console.log("in useEffect get users")
    dispatch(getUsersByUsername(searchItem))
  }, [searchItem])

  const handleMenuClick = (e) => {
    setVisible(false)
    console.log("e", e)
    navigate(`/profile/${e.key}`)
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          key: searchedUsers.length > 0 ? searchedUsers[0].id : "",
          label: searchedUsers.length > 0 ? searchedUsers[0].username : "",
        },
      ]}
    />
  )

  const handleVisibleChange = (flag) => {
    setVisible(flag)
  }

  const onSearch = (value) => {
    console.log({ value })
    setSearchItem(value)
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
            <Dropdown
              overlay={menu}
              onVisibleChange={handleVisibleChange}
              visible={visible}
            >
              <Search
                className='navbar--search'
                placeholder='Search Twitter'
                enterButton='Search'
                loading={isLoading}
                size='large'
                onSearch={onSearch}
              />
            </Dropdown>
          </Col>
          <Col span={9}> </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: "50px 70px",
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
