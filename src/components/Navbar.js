import { Menu, Input, Col, Row, Avatar } from "antd"
import "../index.css"
import "antd/dist/antd.min.css"
import { TwitterOutlined, UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
const { Search } = Input

export default function Navbar({ tab, auth }) {
  const items = [
    {
      icon: (
        <Link to='/'>
          <TwitterOutlined />
        </Link>
      ),
      key: "logo",
      label: "Birdie",
    },
    {
      icon: (
        <Link to='/profile'>
          {/* <UserOutlined /> */}
          <Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />
        </Link>
      ),
      key: "profile",
      label: "Profile",
    },
    // {
    //   icon: (

    //   ),
    //   disabled: true,
    // },
  ]

  return (
    <>
      {auth && (
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={[`${tab === "logo" ? "logo" : "profile"}`]}
          items={[
            {
              icon: (
                <Link to='/'>
                  <TwitterOutlined />
                </Link>
              ),
              key: "logo",
              label: "Birdie",
            },
          ]}
        />
      )}
      {!auth && (
        <Row>
          <Col span={9}>
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={[`${tab === "logo" ? "logo" : "profile"}`]}
              items={items}
            />
          </Col>
          <Col span={6}>
            <Search
              className='navbar--search'
              placeholder='Search Twitter'
              allowClear
              enterButton='Search'
              size='large'
              // onSearch={onSearch}
            />
          </Col>
          <Col span={9}> </Col>
        </Row>
      )}
    </>
  )
}
