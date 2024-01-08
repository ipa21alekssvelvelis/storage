

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserActionPage from './components/UserActionPage';
import Login from "./components/Login"
import Storage from "./components/Storage"
import Receive from "./components/Receive"
import Header from "./components/Header"
// import Deliver from "./components/Deliver";
import { getWithExpiry } from './utils/localStorageUtils';

function App() {
  const role = getWithExpiry('role');
  console.log(role);

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {!role ? (
            <Route path="/Login" element={<Login />} />
          ) : (
            <>
              <Route path="/UserAction" element={<UserActionPage />} />
              <Route path="/Storage" element={<Storage />} />
              <Route path="/Header" element={<Header />} />
              <Route path="/Receive" element={<Receive />} />
              {/* <Route path="/Deliver" element={<Deliver/>}/> */}
              {/* <Route path="/Shelves" element={<Shelves/>}/> */}
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
