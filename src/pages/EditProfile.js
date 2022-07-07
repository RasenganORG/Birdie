import Navbar from "../components/Navbar"
import EditProfileForm from "../components/EditProfileForm"
import { Button, PageHeader } from "antd"

function EditProfile() {
  return (
    <>
      <Navbar tab='profile' />
      <PageHeader
        onBack={() => window.history.back()}
        title='Edit Profile'
        extra={[
          <Button key='1' type='primary'>
            Save
          </Button>,
        ]}
      ></PageHeader>
      <EditProfileForm />
    </>
  )
}

export default EditProfile
