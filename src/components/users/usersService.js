import axios from "axios"

const API_USERS_URL = "http://localhost:8080/api/users/"

const getUsers = async () => {
  const response = await axios.get(API_USERS_URL)

  return response.data
}

const usersService = {
  getUsers,
}

export default usersService
