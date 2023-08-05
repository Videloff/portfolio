import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Projects } from "../pages/Projects"
import { Cv } from "../pages/Cv"
import { Contact } from "../pages/Contact"
import BackgroundImages from '../components/BackgroundImages';
import Navbar from "../components/Navbar"

import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <BackgroundImages />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/curriculum-vitae" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
