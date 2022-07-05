import { Form, Input, Button } from "antd";
import { Anchor } from 'antd';
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from 'react';

export default function LoginForm({ setUser }) {
    const navigate = useNavigate()

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleFinish(values){
        console.log(username)
        console.log(password)
        setUser({username: username, password: password})
        navigate("../")
    }
    
    return ( 
        <Form
            name="basic"
            labelCol={{
                span: 8
            }}
            wrapperCol={{
                span: 8
            }}
            onFinish={handleFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label= "Username"
                name= "username"
                value={username}
                onChange={e => setUserName(e.target.value)}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
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
