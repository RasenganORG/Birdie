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

function ShowUsers({ userId, userType, setIsModalVisible, isModalVisible }) {
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
      const data = { userId: userId, followedUserId: user.id }
      if (user.isFollowed === false) {
        dispatch(followUser(data))
        dispatch(followUserFromModal(index))
      } else {
        dispatch(unfollowUser(data))
        dispatch(unfollowUserFromModal(index))
      }
    }
  }

  useEffect(() => {
    console.log("userId", { userId })
    userType === "followers"
      ? dispatch(getFollowers(userId))
      : dispatch(getFollowedUsers(userId))
  }, [])

  return (
    <>
      <Modal
        title={userType === "followers" ? "Followers" : "Following"}
        visible={isModalVisible}
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
                title={<Link to={`/profile/${user.id}`}>{user.name}</Link>}
              />
              {userType === "followedUsers" && (
                <Button
                  shape='round'
                  className={
                    user.isFollowed === false ? "btn-white" : "btn-blue"
                  }
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
