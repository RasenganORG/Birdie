import { Layout } from "antd"
import Navbar from "../components/Navbar"
import AddTweet from "../components/AddTweet"
import TweetPost from "../components/TweetPost"
const { Header, Content, Footer } = Layout

export default function Home(props) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header className='header'>
        <Navbar tab='logo' />
      </Header>
      <Layout>
        <Layout
          style={{
            padding: "3% 8%",
          }}
        >
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <AddTweet />
            <TweetPost />
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            {" "}
            Birdie ©2022 Created by EdW
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}
