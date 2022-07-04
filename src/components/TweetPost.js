import { useState } from 'react';
import TweetComment from './TweetComment';
import { Avatar, Comment, Space, Modal } from 'antd';
import { Button, Form, Input } from 'antd';
import { CommentOutlined, HeartOutlined, RetweetOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../index.css';
const { TextArea } = Input;

function TweetPost() {
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

    return (  
        <>
        <Comment
            className='align-tweets'
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
            <div>
                <p  onClick={showModal}>
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
            <TweetComment />
            <TweetComment>
                <TweetComment />
                <TweetComment />
            </TweetComment>
        </Comment>

        {/* MODAL */}
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]}>
        <Comment
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
            <div>
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure).
                </p>
                <hr/>
            </div>
            }
        >
        </Comment>
        <Comment
                author={<a>Han Solo</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
            <Form>
              <Form.Item>
                <TextArea rows={2} placeholder="What's happening?"/>
                </Form.Item>

              <Form.Item>
                <Button htmlType="submit" type="primary">
                    Tweet
                </Button>
              </Form.Item>
            </Form>
                } />
        </Modal>
        </>
    );
}

export default TweetPost;