import AddTweet from "./AddTweet"
import { Avatar, Comment } from "antd"

function ProfileTweets({ children }) {
  return (
    <Comment
      className='align-middle'
      author={<a>Han Solo</a>}
      avatar={
        <Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure).
        </p>
      }
    >
      {children}
    </Comment>
  )
}

export default ProfileTweets
