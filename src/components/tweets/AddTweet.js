import React, { useEffect, useState } from "react"
import { Avatar, Button, Comment, Row, Col, Input, Form, Upload } from "antd"
import { addTweet, uploadMedia } from "./tweetsSlice"
import { useDispatch, useSelector } from "react-redux"
import { UploadOutlined } from "@ant-design/icons"
import "./tweets.css"

const { TextArea } = Input

function AddTweet({ parentId }) {
  const [form] = Form.useForm()
  const [tweetText, setTweetText] = useState("")
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { mediaUrl } = useSelector((state) => state.tweets)
  const [fileInputState, setFileInputState] = useState("")
  const [previewSource, setPreviewSource] = useState("")
  const [selectedFile, setSelectedFile] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [fileList, setFileList] = useState([])

  // const handleSubmit = () => {
  //   if (selectedFile) {
  //     const reader = new FileReader()
  //     reader.readAsDataURL(selectedFile)
  //     reader.onloadend = () => {
  //       dispatch(uploadMedia(reader.result))
  //     }
  //     reader.onerror = () => {
  //       console.error("AHHHHHHHH!!")
  //       setErrMsg("something went wrong!")
  //     }
  //   } else {
  //     dispatch(
  //       addTweet({
  //         parentId: parentId === null ? null : parentId,
  //         userId: user.id,
  //         text: tweetText,
  //         likes: "0",
  //         retweets: "0",
  //         url: "",
  //       })
  //     )
  //   }

  // dispatch(
  //   addTweet({
  //     parentId: parentId === null ? null : parentId,
  //     userId: user.id,
  //     text: tweetText,
  //     likes: "0",
  //     retweets: "0",
  //   })
  // )

  //   form.resetFields()
  // }

  const handleSubmit = () => {
    const fileListUrls = []
    if (fileList.length > 0) {
      fileList.forEach((file) => {
        fileListUrls.push(file.url)
      })
      console.log({ fileListUrls })
    }

    dispatch(
      addTweet({
        tweetData: {
          parentId: parentId === null ? null : parentId,
          userId: user.id,
          text: tweetText,
          likes: "0",
          retweets: "0",
        },
        url: fileListUrls,
      })
    )
  }

  // useEffect(() => {
  //   console.log(mediaUrl)
  //   selectedFile &&
  //     dispatch(
  //       addTweet({
  //         parentId: parentId === null ? null : parentId,
  //         userId: user.id,
  //         text: tweetText,
  //         likes: "0",
  //         retweets: "0",
  //         url: mediaUrl,
  //       })
  //     )
  // }, [mediaUrl])

  const props = {
    customRequest: ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok")
      }, 0)
    },
    // onChange({ file, fileList }) {
    //   console.log({ file })

    //   const reader = new FileReader()
    //   reader.readAsDataURL(file.originFileObj)

    //   // reader.onloadend = () => {
    //   //   dispatch(uploadMedia(reader.result))
    //   // }

    //   if (file.status !== "uploading") {
    //     console.log(file, fileList)
    //   }
    // },
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    console.log({ file })
    previewFile(file)
    setSelectedFile(file)
    setFileInputState(e.target.value)
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const onChange = ({ file, fileList }) => {
    setFileList(fileList)
    console.log({ file, fileList })

    const reader = new FileReader()
    reader.readAsDataURL(file.originFileObj)

    reader.onloadend = () => {
      console.log("reader.result", reader.result)
      file.url = reader.result
      console.log("onloadend")
      console.log({ file, fileList })
      // dispatch(uploadMedia(reader.result))
    }

    if (file.status !== "uploading") {
      console.log(file, fileList)
    }
  }

  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        console.log({ reader })
        reader.onload = () => resolve(reader.result)
      })
    }

    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  // return (
  //   <Upload
  //     // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
  //     listType='picture-card'
  //     fileList={fileList}
  //     onChange={onChange}
  //     onPreview={onPreview}
  //     {...props}
  //   >
  //     {fileList.length < 5 && "+ Upload"}
  //   </Upload>
  // )

  return (
    <Comment
      className='align-tweets'
      author={<a>{user.username}</a>}
      avatar={<Avatar src={user.avatar} alt='Han Solo' />}
      content={
        <Form
          form={form}
          name='addTweet'
          initialValues={{ tweetText: "", fileInputState: "" }}
          onFinish={handleSubmit}
        >
          <Row gutter={16}>
            <Col span={20}>
              <Form.Item name='tweetText'>
                <TextArea
                  value={tweetText}
                  data-cy='addtweet--textarea'
                  placeholder="What's happening?"
                  onChange={(e) => setTweetText(e.target.value)}
                  autoSize={{
                    minRows: 3,
                    maxRows: 5,
                  }}
                />
              </Form.Item>

              <Form.Item name='upload'>
                {/* <Upload {...props}>
                  <Button icon={<UploadOutlined />} />
                </Upload> */}
                {/* <input
                  id='fileInput'
                  name='fileInputState'
                  type='file'
                  onChange={handleFileInputChange}
                  value={fileInputState}
                /> */}
                <Upload
                  // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                  listType='picture-card'
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  {...props}
                >
                  Upload
                </Upload>
              </Form.Item>
            </Col>

            <Col span={1}>
              <Form.Item>
                <Button
                  htmlType='submit'
                  shape='round'
                  type='primary'
                  // onClick={handleSubmit}
                >
                  Tweet
                </Button>
              </Form.Item>
            </Col>
          </Row>
          {previewSource && (
            <img
              src={previewSource}
              alt='chosen'
              style={{ height: "200px", width: "500px" }}
            />
          )}
        </Form>
      }
    />
  )
  // return (
  //   <div>
  //     <form onSubmit={handleSubmitFile} className='form'>
  //       <input
  //         id='fileInput'
  //         type='file'
  //         name='image'
  //         onChange={handleFileInputChange}
  //         value={fileInputState}
  //         className='form-input'
  //       />
  //       <button className='btn' type='submit'>
  //         Submit
  //       </button>
  //     </form>
  //     {previewSource && (
  //       <img src={previewSource} alt='chosen' style={{ height: "300px" }} />
  //     )}
  //   </div>
  // )
}

export default AddTweet
