import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { like, addTweet } from "./tweetsSlice"
import { Typography, Avatar, Button, List, Skeleton } from "antd"

const count = 3
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`

function Tweets() {
  const tweets = useSelector((state) => state.tweets.tweets)
  const dispatch = useDispatch()

  return (
    <>
      <h1>List of tweets</h1>
      <List
        bordered
        dataSource={tweets}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <a key='list-loadmore-edit' onClick={() => dispatch(like(index))}>
                like
              </a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.thumbnail} />}
                title={<a href='https://ant.design'>{item.user}</a>}
                description='Ant Design, a design language for background applications, is refined by Ant UED Team'
              />
              <div>likes:{item.likes}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  )
}

export default Tweets
