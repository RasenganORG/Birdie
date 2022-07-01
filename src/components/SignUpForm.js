import "antd/dist/antd.min.css";
import "../index.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Anchor } from 'antd';
import { Link } from "react-router-dom";

export default function SignUpForm({ type }) {
    return ( 
        <Form
            name="basic"
            labelCol={{
                span: 8
            }}
            wrapperCol={{
                span: 8
            }}

            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label= "Username"
                name= "username"
                rules={[
                {
                    required: true,
                    message: "Please enter your username!"
                }
                    ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: "Please input your password!"
                }
                    ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Confirm Password"
                name="passwordConfirm"
                rules={[
                {
                    required: true,
                    message: "Please input your password!"
                }
                    ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 8
                }}
            >
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            <Anchor>
                    <Link to="/auth"> <Anchor.Link href = "" title="Login!"/> </Link>
            </Anchor>
        </Form>
        
    );
}
