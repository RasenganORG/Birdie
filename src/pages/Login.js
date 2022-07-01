import NavbarLogin from '../components/NavbarLogin';
import LoginForm from '../components/LoginForm';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Login() {
    return ( 
        <div>
            <NavbarLogin />
            <LoginForm />
        </div>
    );
}
