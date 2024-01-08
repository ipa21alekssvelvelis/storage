import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shelves from "./components/Shelves"
import Header from "./components/Header"
import Storage from "./components/Storage"

function App() {
  return (
		<Router>
			<div className='min-h-screen'>
				<Header />
				<Routes>
					<Route path='/Shelves' element={<Shelves />} />
					<Route path='/Storage' element={<Storage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App;
