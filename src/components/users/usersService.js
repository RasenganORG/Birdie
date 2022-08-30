import axios from "axios"

const API_USERS_URL = "http://localhost:8080/api/users/"
const API_USER_URL = "http://localhost:8080/api/user/"
const API_USER_BY_ID_URL = "http://localhost:8080/api/userById/"
const API_USERNAME_URL = "http://localhost:8080/api/usersbyusername"
const API_USERS_BY_ID_URL = "http://localhost:8080/api/usersById"
const API_FOLLOW_USER_URL = "http://localhost:8080/api/follows/"
const API_UNFOLLOW_USER_URL = "http://localhost:8080/api/unfollow/"
const API_FOLLOWERS_URL = "http://localhost:8080/api/followers"
const API_FOLLOWING_URL = "http://localhost:8080/api/following"

const getUsers = async () => {
  const response = await axios.get(API_USERS_URL)

  return response.data
}

const getUsersByUsername = async (username) => {
  console.log({ username })
  const response = await axios.get(`${API_USERNAME_URL}?username=${username}`)

  console.log("response.data", response.data)

  return response.data
}
const getUserById = async (data) => {
  console.log({ data })
  const response = await axios.get(`${API_USER_BY_ID_URL}`, {
    params: {
      userId: data.userId,
      followedUserId: data.followedUserId,
    },
  })

  console.log("response.data", response.data)

  return response.data
}

const getUsersById = async (userIds) => {
  console.log("userIds", userIds)
  const response = await axios.get(API_USERS_BY_ID_URL, {
    params: { userIds: userIds },
  })

  console.log("response.data", response.data)

  return response.data
}

const editUser = async (user) => {
  console.log({ user })
  const response = await axios.put(`${API_USER_URL}${user.id}`, user)

  console.log("response.data", response.data)
}

const followUser = async (data) => {
  console.log({ data })
  const response = await axios.post(API_FOLLOW_USER_URL, data, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
  })

  console.log("response.data", response.data)
  return response.data
}

const unfollowUser = async (data) => {
  console.log({ data })
  const response = await axios.delete(API_UNFOLLOW_USER_URL, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
    data: { data },
  })

  console.log("response.data", response.data)
  return response.data
}

// const getFollowers = async (userId) => {
//   console.log({ userId })
//   const response = await axios.get(`${API_FOLLOWERS_URL}${userId}`)

//   console.log("response.data", response.data)

//   return response.data
// }

// const getFollowedUsers = async (userId) => {
//   console.log({ userId })
//   const response = await axios.get(`${API_FOLLOWING_URL}${userId}`)

//   console.log("response.data", response.data)

//   return response.data
// }

const getFollowers = async (data) => {
  console.log(data.userId)
  const response = await axios.get(
    `${API_FOLLOWERS_URL}?userId=${data.userId}&homeUserId=${data.homeUserId}`
  )

  console.log("response.data", response.data)

  return response.data
}

const getFollowedUsers = async (data) => {
  console.log(data.userId)
  const response = await axios.get(
    `${API_FOLLOWING_URL}?userId=${data.userId}&homeUserId=${data.homeUserId}`
  )

  console.log("response.data", response.data)

  return response.data
}

const usersService = {
  getUsers,
  getUsersByUsername,
  getUserById,
  getUsersById,
  editUser,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowedUsers,
}

export default usersService
