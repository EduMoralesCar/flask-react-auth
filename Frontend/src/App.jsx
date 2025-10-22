import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Users from './components/Users'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{ paddingTop: '80px' }}>
        <hr />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App