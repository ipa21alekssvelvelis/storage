import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserActionPage from './components/UserActionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <h1 className="text-3xl font-bold underline bg-red-500">
          Hello world!
        </h1>
        <Routes>
        <Route path="/UserAction" element={<UserActionPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
