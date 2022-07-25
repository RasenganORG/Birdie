import React from "react"
import Navbar from "../components/Navbar"
import ProfileHeader from "../components/ProfileHeader"
import ProfileTweets from "../components/ProfileTweets"
import { Layout } from "antd"
const { Header, Content, Footer } = Layout

function Profile() {
  return (
    // <>
    //   <Navbar tab='profile' />
    //   <ProfileHeader />
    //   <ProfileTweets />
    // </>
    <Layout style={{ height: "100vh" }}>
      <Header className='header'>
        <Navbar tab='profiles' />
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
            <ProfileHeader />
            <ProfileTweets />
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

export default Profile
