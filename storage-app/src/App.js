import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserActionPage from './components/UserActionPage';
import Login from "./components/Login"
import Storage from "./components/Storage"
import Receive from "./components/Receive"
import Header from "./components/Header"
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/UserAction" element={<UserActionPage />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Storage" element={<Storage/>}/>
          <Route path="/Header" element={<Header/>}/>
          <Route path="/Receive" element={<Receive/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
