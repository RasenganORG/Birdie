import axios from "axios"

const API_USERS_URL = "http://localhost:8080/api/users/"
const API_USERNAME_URL = "http://localhost:8080/api/usersbyusername"
const API_USERS_BY_ID_URL = "http://localhost:8080/api/usersById"

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
const getUserById = async (userId) => {
  console.log({ userId })
  const response = await axios.get(`${API_USERS_URL}${userId}`)

  console.log("response.data", response.data)

  return response.data
}

const getUsersById = async (userIds) => {
  console.log({ userIds })
  const response = await axios.get(API_USERS_BY_ID_URL, userIds)

  console.log("response.data", response.data)

  return response.data
}

const usersService = {
  getUsers,
  getUsersByUsername,
  getUserById,
  getUsersById,
}

export default usersService
