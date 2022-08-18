import React, { useEffect } from "react"
import "antd/dist/antd.css"
import { Modal, Avatar, List } from "antd"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getFollowedUsers, getFollowers } from "./usersSlice"

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

  useEffect(() => {
    console.log("usreId", { userId })
    userType === "followers"
      ? dispatch(getFollowers(userId))
      : dispatch(getFollowedUsers(userId))
  }, [])

  return (
    <>
      <Modal
        title='Basic Modal'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <List
          loading={isLoading}
          itemLayout='horizontal'
          dataSource={userType === "followers" ? followers : followedUsers}
          renderItem={(user) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={user.avatar} />}
                title={<Link to={`/profile/${user.id}`}>{user.name}</Link>}
              />
            </List.Item>
          )}
        />
      </Modal>
    </>
  )
}

export default ShowUsers
