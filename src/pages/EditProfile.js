import React from "react"
import Navbar from "../components/Navbar"
import EditProfileForm from "../components/EditProfileForm"
import { Button, PageHeader } from "antd"
import { Layout } from "antd"
const { Header, Content, Footer } = Layout

function EditProfile() {
  return (
    // <>
    //   <Navbar tab='profile' />
    //   <PageHeader
    //     onBack={() => window.history.back()}
    //     title='Edit Profile'
    //     extra={[
    //       <Button key='1' type='primary'>
    //         Save
    //       </Button>,
    //     ]}
    //   ></PageHeader>
    //   <EditProfileForm />
    // </>

    <Layout style={{ height: "100vh" }}>
      <Header className='header'>
        <Navbar tab='profile' />
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
              onBack={() => window.history.back()}
              title='Edit Profile'
            ></PageHeader>
            <EditProfileForm />
            <Button key='1' type='primary'>
              Save
            </Button>
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

export default EditProfile
