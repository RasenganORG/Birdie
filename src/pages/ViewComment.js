import "antd/dist/antd.min.css"
import "../index.css"
import { PageHeader, Layout } from "antd"
import Navbar from "../components/Navbar"
import TweetPost from "../components/TweetPost"
const { Header, Content } = Layout
function ViewComment() {
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
            <PageHeader onBack={() => window.history.back()} title='Tweet' />
            <TweetPost viewComment={true} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default ViewComment
