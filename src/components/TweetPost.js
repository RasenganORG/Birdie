import { useState } from 'react';
import TweetComment from './TweetComment';
import CommentModal from './CommentModal';
import { Avatar, Comment, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form } from 'antd';
import { CommentOutlined, HeartOutlined, RetweetOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';
import '../index.css';
const { TextArea } = Input;

function TweetPost({ viewComment }) {
    const navigate = useNavigate()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const comments = [
        {
            author: 'Han Solo', 
            avatar: "https://joeschmoe.io/api/v1/random"
        },
        {
            author: 'Han Solo', 
            avatar: "https://joeschmoe.io/api/v1/random",
            children: [
                {author: 'Eu', 
                avatar: "https://joeschmoe.io/api/v1/random"}
            ]
        }
    ]

    const showComments = comments.map(comment => {
            return <TweetComment />
    })

    return (  
        <>
        <Comment
            className='align-tweets'
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
            <div>
                <p onClick={()=> {
                    navigate("../comment", {replace: false})
                }}>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure).
                </p>
                <Space style={{paddingTop: '10px'}}>
                    <span>2</span>
                    <CommentOutlined style={{ fontSize: '20px', paddingRight: '15vw'}} onClick={showModal}/>
                    <span>3</span>
                    <RetweetOutlined style={{ fontSize: '20px', paddingRight: '15vw'}} rotate='90'/>
                    <span>5</span>
                    <HeartOutlined style={{ fontSize: '20px'}}/>
                </Space>
            </div>
            }
        >
            
        {viewComment === true && <Comment
                author={<a>Han Solo</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
            <Form>
            <Form.Item>
                <TextArea rows={2} placeholder="Tweet your reply"/>
                </Form.Item>

            <Form.Item>
                <Button htmlType="submit" type="primary">
                    Reply
                </Button>
            </Form.Item>
            </Form>} />}
            
        {showComments}
            
        </Comment>

        {/* MODAL */}

        {isModalVisible && <CommentModal isModalVsible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}/>}
        </>
    );
}

export default TweetPost;