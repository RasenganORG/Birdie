import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="auth" element={<Login />}/>
          <Route path="signUp" element={<SignUp />}/>
          <Route path="one"/>
          <Route exact path="one/two" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
