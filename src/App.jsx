import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Contact from './pages/contact'
import Services from './pages/services'
import Login from './pages/loginForm'
import About from './pages/about'
import Signup from './pages/signup'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* add additional routes here as you create pages */}
      </Routes>
    </Router>
  )
}

export default App
