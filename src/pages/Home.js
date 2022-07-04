import { Layout, Avatar } from "antd";
import Navbar from "../components/Navbar";
import AddTweet from "../components/AddTweet";
import TweetPost from "../components/TweetPost";

export default function Home() {
    return ( 
      <>
          <Navbar tab="home"/>
          <AddTweet />
          <TweetPost />
      </>
    );
}