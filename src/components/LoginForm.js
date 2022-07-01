import { Form, Input, Button } from "antd";
import { Anchor } from 'antd';
import { Link, useNavigate, Navigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate()
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
            onFinish={()=>{
                navigate("../", { replace: true });
            }}
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
                wrapperCol={{
                offset: 8,
                span: 8
                }}
            >
                <Button type="primary" htmlType="submit" >
                Submit
                </Button>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 8
                }}
            >
                <Anchor>
                    <Link to="/signUp"> <Anchor.Link href = "" title="Don't have an account? Sign up!"/> </Link>
                </Anchor>
            </Form.Item>

        </Form>
    );
}
