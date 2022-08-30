import React, { useEffect } from "react"
import "antd/dist/antd.css"
import { Modal, Avatar, List, Button } from "antd"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {
  getFollowedUsers,
  getFollowers,
  followUser,
  unfollowUser,
  followUserFromModal,
  unfollowUserFromModal,
} from "./usersSlice"
import "/home/ana/Documents/GitHub/Birdie/src/pages/profile.css"

function ShowUsers({
  userId,
  userType,
  homeUserId,
  setIsModalVisible,
  isModalVisible,
}) {
  const dispatch = useDispatch()
  const { isLoading, followers, followedUsers } = useSelector(
    (state) => state.users
  )
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleOnClickFollow = (user, index) => {
    console.log({ index })
    console.log("user.id", user.id)
    if (user.id !== userId) {
      const data = { userId: homeUserId, followedUserId: user.id }
      if (user.isFollowed === false) {
        dispatch(followUser(data))
        dispatch(followUserFromModal({ index, userType }))
      } else {
        dispatch(unfollowUser(data))
        dispatch(unfollowUserFromModal({ index, userType }))
      }
    }
  }

  useEffect(() => {
    console.log("userId", { userId })
    const data = {
      userId: userId,
      homeUserId: homeUserId,
    }
    userType === "followers"
      ? dispatch(getFollowers(data))
      : dispatch(getFollowedUsers(data))
  }, [])

  return (
    <>
      <Modal
        title={userType === "followers" ? "Followers" : "Following"}
        visible={isModalVisible}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <List
          loading={isLoading}
          itemLayout='horizontal'
          dataSource={userType === "followers" ? followers : followedUsers}
          renderItem={(user, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={user.avatar} />}
                title={
                  <Link
                    to={`/profile/${user.id}`}
                    onClick={() => handleCancel()}
                  >
                    {user.name}
                  </Link>
                }
              />
              {userType === "followedUsers" && (
                <Button
                  shape='round'
                  className={
                    user.isFollowed === false ? "btn-white" : "btn-blue"
                  }
                  // style={{
                  //   backgroundColor:
                  //     user.isFollowed === false ? "white" : "#3a9ef0",
                  // }}
                  onClick={() => handleOnClickFollow(user, index)}
                >
                  {user.isFollowed === false ? <>Follow</> : <>Following</>}
                </Button>
              )}
              {userType === "followers" && (
                <Button
                  shape='round'
                  className={
                    user.isFollowed === false ? "btn-white" : "btn-blue"
                  }
                  // style={{
                  //   backgroundColor:
                  //     user.isFollowed === false ? "white" : "#3a9ef0",
                  // }}
                  onClick={() => handleOnClickFollow(user, index)}
                >
                  {user.isFollowed === false ? (
                    <>Follow back</>
                  ) : (
                    <>Following</>
                  )}
                </Button>
              )}
            </List.Item>
          )}
        />
      </Modal>
    </>
  )
}

export default ShowUsers
