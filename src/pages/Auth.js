import Navbar from "../components/Navbar"
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"
import { Layout, PageHeader, Tabs } from "antd"
const { Header, Content, Footer } = Layout
const { TabPane } = Tabs

export default function Auth({ setUser }) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header className='header'>
        <Navbar auth={true} />
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
            <PageHeader
              style={{}}
              className='site-page-header-responsive'
              title='Authenticate'
              footer={
                <Tabs defaultActiveKey='1'>
                  <TabPane tab='Login' key='1'>
                    <LoginForm setUser={setUser} />
                  </TabPane>
                  <TabPane tab='Sign Up' key='2'>
                    <SignUpForm />
                  </TabPane>
                </Tabs>
              }
            ></PageHeader>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Birdie ©2022 Created by EdW
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}
