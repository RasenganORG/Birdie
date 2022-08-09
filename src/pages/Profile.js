import React from "react"
import {
  Button,
  PageHeader,
  Row,
  Statistic,
  Image,
  Avatar,
  Col,
  Tabs,
} from "antd"
import { Link } from "react-router-dom"
import "antd/dist/antd.min.css"
import "../index.css"

const { TabPane } = Tabs

export default function Profile() {
  return (
    <>
      <PageHeader
        // style={{ margin: "0 25%", padding: "0" }}
        onBack={() => window.history.back()}
        title='Han Solo'
        subTitle='1 tweet'
        extra={
          <Link to='edit'>
            <Button key='1' type='primary'>
              Edit Profile
            </Button>
          </Link>
        }
      >
        <Row>
          <Col span={5} style={{ marginRight: "30px" }}>
            <div
              style={{
                backgroundColor: "#f0f2f5",
                padding: "15%",
                height: "50vh",
              }}
            >
              <Avatar
                style={{
                  display: "block",
                }}
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 90,
                }}
                src='https://joeschmoe.io/api/v1/random'
              />
              <h2
                style={{
                  textAlign: "start",
                }}
              >
                Han Solo
              </h2>
              <p
                style={{
                  textAlign: "start",
                }}
              >
                @han_solo
              </p>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                imperdiet, nisi eget rutrum rhoncus, nibh libero efficitur
                sapien, in finibus nulla augue vel diam. Phasellus pulvinar odio
                tristique erat sodales, quis viverra erat scelerisque.
              </p>
            </div>
          </Col>
          <Col>
            <div
              style={{
                borderLeft: "3px solid #40a9ff",
                height: "50vh",
                marginRight: "30px",
              }}
            ></div>
          </Col>
          <Col span={16}>
            <Image
              height={200}
              width='60vw'
              src='https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg'
            />
            <Row style={{ margin: "20px" }}>
              <Statistic
                title='Tweets'
                value={1005}
                style={{ paddingRight: "1vw" }}
              />
              <Statistic
                title='Followers'
                value='20'
                style={{ paddingRight: "1vw" }}
              />
              <Statistic title='Following' value={5} />
            </Row>
            <Row style={{ marginLeft: "50%" }}>
              <Tabs defaultActiveKey='1'>
                <TabPane tab='Tweets' key='1'>
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab='Retweets' key='2'>
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
            </Row>
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}
