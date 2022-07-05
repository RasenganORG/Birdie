import { Avatar, Comment, Button, Input, Form, Modal } from 'antd';
const { TextArea } = Input;

function CommentModal( { isModalVsible, handleOk, handleCancel }) {
    return ( 
        <Modal visible = {isModalVsible} onOk={handleOk} onCancel={handleCancel} footer={[]}>
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
                    <TextArea rows={2} placeholder="Tweet your reply"/>
                    </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Reply
                    </Button>
                </Form.Item>
                </Form>
                    } />
        </Modal>
     );
}

export default CommentModal;