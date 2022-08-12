import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, Form, Upload, Input } from "antd"
import { useNavigate, useParams } from "react-router-dom"
import {
  getUserById,
  editUser,
} from "/home/ana/Documents/GitHub/Birdie/src/components/users/usersSlice.js"

const { TextArea } = Input
const normFile = (e) => {
  console.log("Upload event:", e)

  if (Array.isArray(e)) {
    return e
  }

  // return e?.fileList
}

function EditProfile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const userId = params.userId
  const { userById } = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(getUserById(userId))
  }, [])

  const handleFinish = (values) => {
    console.log(values)
    dispatch(editUser({ ...values, id: userId }))
  }

  return (
    <>
      {userById && (
        <Form
          style={{ margin: "0 25%" }}
          name='editUser'
          initialValues={{
            avatar: userById.avatar,
            background: userById.background,
            name: userById.name,
            bio: userById.bio,
          }}
          onFinish={handleFinish}
        >
          <Form.Item
            name='avatar'
            label='Upload Avatar'
            // valuePropName='fileList'
            // getValueFromEvent={normFile}
            // extra='upload a new profile picture'
          >
            <Input placeholder='Avatar link' />
          </Form.Item>

          <Form.Item
            name='background'
            label='Upload Background'
            // valuePropName='fileList'
            // getValueFromEvent={normFile}
            // extra='upload a new backgroud picture'
          >
            <Input placeholder='Background link' />
          </Form.Item>

          <Form.Item name='name'>
            <Input placeholder='Name' />
          </Form.Item>

          <Form.Item name='bio'>
            <TextArea placeholder='Bio' />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Submit
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='cancel'
              className='login-form-button'
              onClick={() => navigate(`/profile/${userId}`)}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  )
}

export default EditProfile
