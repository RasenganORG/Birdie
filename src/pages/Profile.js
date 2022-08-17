import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  Button,
  PageHeader,
  Row,
  Statistic,
  Image,
  Avatar,
  Col,
  Tabs,
  Spin,
} from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { Link, useNavigate, useParams } from "react-router-dom"
import {
  getUserById,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowedUsers,
} from "/home/ana/Documents/GitHub/Birdie/src/components/users/usersSlice.js"
import "antd/dist/antd.min.css"
import "../index.css"
import TweetsList from "../components/tweets/TweetsList"
import { getTweetsByUserId } from "../components/tweets/tweetsSlice"
import ShowUsers from "../components/users/ShowUsers"

const { TabPane } = Tabs

export default function Profile() {
  const dispatch = useDispatch()
  const params = useParams()
  const userId = params.userId
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [userType, setUserType] = useState("")
  const { tweets } = useSelector((state) => state.tweets)
  const {
    userById,
    followers,
    nrOfFollowers,
    followedUsers,
    nrOfFollowedUsers,
  } = useSelector((state) => state.users)
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    const data = {
      userId: user.id,
      followedUserId: userId,
    }
    dispatch(getUserById(data))
    dispatch(getTweetsByUserId(userId))
    dispatch(getFollowers(userId))
    dispatch(getFollowedUsers(userId))
  }, [userId])

  const handleOnClickFollow = () => {
    console.log({ user })
    console.log("user.id", user.id)
    if (user.id !== userId) {
      const data = { userId: user.id, followedUserId: userId }
      if (userById.isFollowed === false) {
        dispatch(followUser(data))
      } else {
        dispatch(unfollowUser(data))
      }
    }
  }

  console.log({ followers })
  console.log({ followedUsers })
  console.log(userById)
  console.log({ tweets })
  console.log()
  return (
    <>
      {nrOfFollowedUsers === null && (
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: "50px",
              }}
              spin
            />
          }
        />
      )}
      {userById && nrOfFollowedUsers !== null && (
        <PageHeader
          // style={{ margin: "0 25%", padding: "0" }}
          onBack={() => window.history.back()}
          title={userById.name}
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
                  border: "2px solid #f0f2f5",
                  borderRadius: "12px",
                  padding: "15%",
                  height: "100%",
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
                  src={userById.avatar}
                />
                <h2
                  style={{
                    textAlign: "start",
                  }}
                >
                  {userById.name}
                </h2>
                <p
                  style={{
                    textAlign: "start",
                  }}
                >
                  @{userById.username}
                </p>
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  {userById.bio}
                </p>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  borderLeft: "3px solid #40a9ff",
                  height: "100%",
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
                  value={tweets.length}
                  style={{
                    paddingRight: "1vw",
                  }}
                />
                <Button
                  type='text'
                  onClick={() => {
                    // const newData = followers.map((item) => item.userId)
                    // console.log({ newData })
                    setUserType("followers")
                    setIsModalVisible(true)
                  }}
                  style={{ marginTop: "0", paddingTop: "0" }}
                >
                  <Statistic
                    title='Followers'
                    value={nrOfFollowers}
                    style={{
                      paddingRight: "1vw",
                    }}
                  />
                </Button>
                <Button
                  type='text'
                  onClick={() => {
                    setUserType("followedUsers")
                    setIsModalVisible(true)
                  }}
                  style={{ marginTop: "0", paddingTop: "0" }}
                >
                  <Statistic title='Following' value={nrOfFollowedUsers} />
                </Button>
                <Button onClick={handleOnClickFollow}>
                  {userById.isFollowed === false ? (
                    <h1>Follow</h1>
                  ) : (
                    <h1>Following</h1>
                  )}
                </Button>
              </Row>
              {/* <Row style={{ width: "100%" }}> */}
              <Tabs defaultActiveKey='1' centered>
                <TabPane
                  tab='Tweets'
                  key='1'
                  style={{
                    border: "2px solid #f0f2f5",
                    borderRadius: "12px",
                    backgroundColor: "#f0f2f5",
                    paddingLeft: "2%",
                  }}
                >
                  {tweets && <TweetsList tweets={tweets} />}
                </TabPane>
                <TabPane tab='Retweets' key='2'>
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
              {/* </Row> */}
            </Col>
          </Row>
          {isModalVisible && (
            <ShowUsers
              userId={userId}
              userType={userType}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          )}
        </PageHeader>
      )}
    </>
  )
}
