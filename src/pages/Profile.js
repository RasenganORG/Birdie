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
  Tooltip,
} from "antd"
import { LoadingOutlined, MailOutlined } from "@ant-design/icons"
import { Link, useNavigate, useParams } from "react-router-dom"
import {
  getUserById,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowedUsers,
  followUserFromTheirProfile,
  unfollowUserFromTheirProfile,
} from "/home/ana/Documents/GitHub/Birdie/src/components/users/usersSlice.js"
import "antd/dist/antd.min.css"
import "../index.css"
import "./profile.css"
import TweetsList from "../components/tweets/TweetsList"
import {
  getRetweetsByUserId,
  getTweetsByUserId,
} from "../components/tweets/tweetsSlice"
import FollowersList from "../components/users/FollowersList"
import {
  addChat,
  getChatById,
  getChatId,
  reset,
} from "../components/chat/chatSlice"

const { TabPane } = Tabs

export default function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const userId = params.userId
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [readyToDispatch, setReadyToDispatch] = useState(false)
  const [userType, setUserType] = useState("")
  const { tweets, retweets } = useSelector((state) => state.tweets)
  const { isLoadingAddChat, currentChat } = useSelector((state) => state.chats)
  const { userById, nrOfFollowers, nrOfFollowedUsers } = useSelector(
    (state) => state.users
  )
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    const data = {
      userId: user.id,
      followedUserId: userId,
    }
    const userData = {
      userId: userId,
      homeUserId: userId,
    }

    const users = {
      firstUserId: user.id,
      secondUserId: userId,
    }
    dispatch(reset())
    dispatch(getUserById(data))
    dispatch(getTweetsByUserId(userId))
    dispatch(getRetweetsByUserId(userId))
    dispatch(getFollowers(userData))
    dispatch(getFollowedUsers(userData))
    dispatch(getChatId(users))
  }, [userId])

  const handleOnClickFollow = () => {
    if (user.id !== userId) {
      const data = {
        userId: user.id,
        followedUserId: userId,
      }
      if (userById.isFollowed === false) {
        dispatch(followUser(data))
        dispatch(followUserFromTheirProfile())
      } else {
        dispatch(unfollowUser(data))
        dispatch(unfollowUserFromTheirProfile())
      }
    }
  }

  const handleOnClickChat = () => {
    const data = {
      users: [user.id, userId],
      createdBy: user.id,
    }
    setReadyToDispatch(true)
    dispatch(addChat(data))
  }

  useEffect(() => {
    console.log({ currentChat })
    readyToDispatch === true &&
      isLoadingAddChat === false &&
      navigate(`/chat/${currentChat.id}`)
  }, [readyToDispatch, isLoadingAddChat])

  // useEffect(() => {
  //   isLoadingAddChat === false &&
  //     isLoadingAddChat !== null &&
  //     currentChat !== null &&
  //     navigate(`/chat/${currentChat.id}`)
  // }, [isLoadingAddChat])

  return (
    <>
      {(nrOfFollowedUsers === null ||
        nrOfFollowers === null ||
        userById === null) && (
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
          onBack={() => window.history.back()}
          title={userById.name}
          subTitle={`${tweets.length} Tweets`}
          extra={
            <Link to='edit'>
              {userById.id === user.id && (
                <Button type='primary' shape='round'>
                  Edit Profile
                </Button>
              )}
            </Link>
          }
        >
          <Row>
            <Col span={5} style={{ marginRight: "5px" }}>
              <div
                style={{
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
                  marginRight: "80px",
                }}
              ></div>
            </Col>
            <Col span={16}>
              <Image
                height='30vh'
                width='95%'
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
                    setUserType("followers")
                    setIsModalVisible(true)
                  }}
                  style={{ margin: "0", padding: "0" }}
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
                  style={{ margin: "0", padding: "0" }}
                >
                  <Statistic
                    title='Following'
                    value={nrOfFollowedUsers}
                    style={{
                      paddingRight: "1vw",
                    }}
                  />
                </Button>
                {userById.id !== user.id && (
                  <Tooltip title='Message' placement='bottom'>
                    <Button
                      type='primary'
                      shape='round'
                      onClick={handleOnClickChat}
                      style={{
                        marginRight: "10px",
                      }}
                      className={"btn-white"}
                    >
                      <MailOutlined />
                    </Button>
                  </Tooltip>
                )}
                {userById.id !== user.id && (
                  <Button
                    type='primary'
                    shape='round'
                    onClick={handleOnClickFollow}
                    className={
                      userById.isFollowed === false ? "btn-white" : "btn-blue"
                    }
                  >
                    {userById.isFollowed === false ? (
                      <>Follow</>
                    ) : (
                      <>Following</>
                    )}
                  </Button>
                )}
              </Row>
              {/* <Row style={{ width: "100%" }}> */}
              <Tabs
                defaultActiveKey='tweets'
                centered
                onChange={(activeKey) => {
                  activeKey === "tweets"
                    ? dispatch(getTweetsByUserId(userId))
                    : dispatch(getRetweetsByUserId(userId))
                }}
              >
                <TabPane
                  tab='Tweets'
                  key='tweets'
                  style={{
                    paddingLeft: "2%",
                  }}
                >
                  {tweets && <TweetsList tweets={tweets} />}
                </TabPane>
                <TabPane
                  tab='Retweets'
                  key='retweets'
                  style={{
                    paddingLeft: "2%",
                  }}
                >
                  {retweets && <TweetsList tweets={retweets} />}
                </TabPane>
              </Tabs>
            </Col>
          </Row>
          {isModalVisible && (
            <FollowersList
              userId={userId}
              homeUserId={user.id}
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
