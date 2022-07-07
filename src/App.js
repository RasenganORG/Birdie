import './App.css';
import { useState } from 'react';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ViewComment from './pages/ViewComment';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Error from './pages/Error.js';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute user={user}>
              <Home user={user}/>
            </ProtectedRoute>} />

          <Route path="comment" element={
            <ProtectedRoute user={user}>
              <ViewComment />
            </ProtectedRoute>
          }/>

          <Route exact path="auth" element={<Login setUser={setUser}/>}/>

          <Route path="signUp" element={<SignUp />}/>

          <Route path="profile" element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }/>

          <Route exact path="profile/edit" element={
            <ProtectedRoute user={user}>
              <EditProfile />
            </ProtectedRoute>} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
