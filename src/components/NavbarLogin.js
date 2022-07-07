import { Menu } from "antd"
import "../index.css"
import "antd/dist/antd.min.css"
import { TwitterOutlined, UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

export default function NavbarLogin() {
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
  ]

  return (
    <div>
      <Menu mode='horizontal' items={items} />
    </div>
  )
}
