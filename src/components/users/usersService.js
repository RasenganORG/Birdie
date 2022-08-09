import axios from "axios"

const API_USERS_URL = "http://localhost:8080/api/users/"
const API_USERNAME_URL = "http://localhost:8080/api/usersbyusername"

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

const usersService = {
  getUsers,
  getUsersByUsername,
}

export default usersService
