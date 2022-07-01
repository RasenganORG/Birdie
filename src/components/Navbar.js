import { Menu } from "antd";
import '../index.css';
import 'antd/dist/antd.min.css';
import { FileExcelOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function Navbar() {
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
        <div>
            <Menu mode="horizontal" items={items} />
        </div>
    );
}
