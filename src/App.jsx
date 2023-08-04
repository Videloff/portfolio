import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Home } from "../pages/Home"
import { Projects } from "../pages/Projects"
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/"> Accueil </Link>
          <Link to="/projects"> Mes projets </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
