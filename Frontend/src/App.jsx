import { Reanpmct } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <div>
          <h1 class="text-center text-primary">Flask + React</h1>
        </div>

      </Routes>
    </Router>
  )
}

export default App
