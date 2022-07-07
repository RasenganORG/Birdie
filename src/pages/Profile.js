import Navbar from "../components/Navbar"
import ProfileHeader from "../components/ProfileHeader"
import ProfileTweets from "../components/ProfileTweets"

function Profile() {
  return (
    <>
      <Navbar tab='profile' />
      <ProfileHeader />
      <ProfileTweets />
    </>
  )
}

export default Profile
