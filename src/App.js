import React from "react"
import { Routes, Route } from "react-router-dom"
import LayoutPage from "./components/layoutPage/LayoutPage"
import Error from "./pages/Error"
import Profile from "./pages/Profile"
import TweetItem from "./components/tweets/TweetItem"
import "./App.css"
import Tweets from "./components/tweets/Tweets"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<Tweets />} />
          <Route path='tweets' element={<Tweets />} />
          <Route path='profile' element={<Profile />} />
          <Route path='tweets/:id' element={<TweetItem />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
