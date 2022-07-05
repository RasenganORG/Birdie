import { Avatar, Comment, Space } from 'antd';
import { CommentOutlined, HeartOutlined, RetweetOutlined } from '@ant-design/icons';
function TweetComment({ children }) {
    return ( 
        <Comment
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
                <div>
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                    </p>
                    <Space style={{ paddingTop: '10px' }}>
                    <CommentOutlined style={{ fontSize: '20px', paddingRight: '15vw' }}/>
                    <RetweetOutlined style={{ fontSize: '20px', paddingRight: '15vw' }} rotate='90'/>
                    <HeartOutlined style={{ fontSize: '20px' }}/>
                </Space>
        </div>
            }
        >
            {children}
  </Comment>
    );
}

export default TweetComment;