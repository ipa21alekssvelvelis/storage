import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserActionPage from './components/UserActionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/UserAction" element={<UserActionPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
