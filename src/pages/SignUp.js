import NavbarLogin from '../components/NavbarLogin';
import SignUpForm from '../components/SignUpForm';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Login() {
    return ( 
        <div>
            <NavbarLogin />
            <SignUpForm />
        </div>
    );
}
