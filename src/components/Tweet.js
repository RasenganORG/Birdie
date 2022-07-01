import 'antd/dist/antd.css';
import '../index.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import TweetTextArea from './TweetTextArea'
import { Breadcrumb, Layout, Menu } from 'antd';
import {PictureOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Comment, Form, Input, List} from 'antd';
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { TextArea } = Input;


function Tweet() {
    const items = [
        { 
            icon: <Link to="/"><TwitterOutlined/></Link>, 
            key: "logo", 
            label: "Birdie"
        },
        {
            icon: <Link to="profile"><UserOutlined /></Link>,
            key: "profile",
            label: "Profile"
        }
    ]
    return ( 
        <Layout>
            <Header
                style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['logo']}
                    items={items}
                />
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                    marginTop: 64,
                }}
            >
                <div
                    className="site-layout-background"
                    style={{
                    padding: 24,
                    minHeight: 380,
                    }}
                >
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
                } />
                </div>
            </Content>
            <Footer
            style={{
                textAlign: 'center',
            }}
            >
            Ant Design ©2018 Created by Ant UED
            </Footer>
  </Layout>
    );
}

export default Tweet;