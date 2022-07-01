import 'antd/dist/antd.css';
import '../index.css';
import { UserOutlined, PictureOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Button, Comment, Form, Input, List } from 'antd';
const { TextArea } = Input;

function Tweet() {
    return ( 
        <div>
            <Input placeholder="What's happening?" bordered={true} style={{
                                height: 80,
                                width: '50%'
                                }}/>
            <PictureOutlined />

            <Comment
                author={<a>Han Solo</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    // <Input placeholder="sWhat's happening?" bordered={true} style={{
                    //     height: 80,
                    //     width: '50%'
                    //     }}/>
                    <>
                        <Form.Item>
                        <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item>
                        <Button htmlType="submit" type="primary">
                            Add Comment
                        </Button>
                        </Form.Item>
                    </>
                }
            
    />
        </div>
    );
}

export default Tweet;