import React from "react"
import { Routes, Route } from "react-router-dom"
import LayoutPage from "./components/layoutPage/LayoutPage"
import Error from "./pages/Error"
import Profile from "./pages/Profile"
import EditProfile from "./pages/EditProfile"
import TweetItem from "./components/tweets/TweetItem"
import "./App.css"
import Tweets from "./components/tweets/Tweets"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import PrivateRoute from "./components/auth/PrivateRoute"
import Search from "./pages/Search"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <LayoutPage />
            </PrivateRoute>
          }
        >
          <Route index element={<Tweets />} />
          <Route path='tweets' element={<Tweets />} />
          <Route path='profile/:userId/edit' element={<EditProfile />} />
          <Route path='profile/:userId' element={<Profile />} />
          <Route path='tweets/:tweetId' element={<TweetItem />} />
          <Route path='search' element={<Search />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
