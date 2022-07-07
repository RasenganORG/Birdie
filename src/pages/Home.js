import { Layout, Avatar } from "antd"
import Navbar from "../components/Navbar"
import AddTweet from "../components/AddTweet"
import TweetPost from "../components/TweetPost"

export default function Home(props) {
  return (
    <>
      <Navbar tab='logo' />
      <AddTweet />
      <TweetPost />
    </>
  )
}
