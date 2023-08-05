import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import logoSVG from "../src/assets/logo.svg"
import '../src/App.css'

const Navbar = () => {
  const [dayMode, setDayMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark')
    if (dayMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dayMode]); 

  return (
    <>
      <div className="flex justify-end">
        <button onClick={()=> {setDayMode(!dayMode)}} className="mt-3 mr-3 w-12 h-6 rounded-full p-1 bg-gray-500 dark:bg-gray-700 transition-colors duration-500 ease-in focus:outline-none focus:border-transparent">
          <div id="toggle" className="rounded-full w-4 h-4 bg-orange-500 relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out" />
        </button>
      </div>
      <nav className={`flex items-center justify-between w-full flex-wrap py-3 mt-3 ${dayMode ? 'dark' : ''}`}>
        <img src={logoSVG} alt="logo" className="ml-5" />
        <div className="flex justify-end w-auto">
          <div className="flex-grow text-lg mr-6">
            <Link to="/" className="inline-block mr-2 nav-link"> Accueil </Link>
            <Link to="/projects" className="inline-block mr-2 nav-link"> Mes projets </Link>
            <Link to="/curriculum-vitae" className="inline-block mr-2 nav-link">CV</Link>
            <Link to="/contact" className="inline-block nav-link">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;