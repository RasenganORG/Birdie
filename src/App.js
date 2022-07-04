import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="auth" element={<Login />}/>
          <Route path="signUp" element={<SignUp />}/>
          <Route path="profile" element={<Profile />}/>
          <Route exact path="profile/edit" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
