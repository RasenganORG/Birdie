import './App.css';
import { useState } from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ViewComment from './pages/ViewComment';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Error from './pages/Error.js';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home user={user}/>} />
          <Route exact path="comment" element={<ViewComment/>}/>
          <Route path="auth" element={<Login setUser={setUser}/>}/>
          <Route path="signUp" element={<SignUp />}/>
          <Route path="profile" element={<Profile />}/>
          <Route exact path="profile/edit" element={<EditProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
