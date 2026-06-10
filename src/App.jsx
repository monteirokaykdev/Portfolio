import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/NavBar'
import Secao from './components/Secao'
import Experiencias from './components/Experiencia'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "bg-slate-900 text-white min-h-screen" : "bg-slate-100 text-black min-h-screen"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Secao id="home">
        <Header />
      </Secao>

      <div className="flex flex-col items-center justify-center gap-6 py-16">
        <a
          href="#experiences"
          className={darkMode ? "flex flex-col items-center text-white hover:text-blue-400 transition" : "flex flex-col items-center text-slate-700 hover:text-blue-500 transition"}
        >
          <span className="text-lg">Scroll Down</span>
          <span className="text-6xl animate-bounce">↓</span>
        </a>

        <div className="flex gap-3 flex-wrap justify-center">
          <span className="px-4 py-2 rounded-full border border-slate-400">Java</span>
          <span className="px-4 py-2 rounded-full border border-slate-400">Spring Boot</span>
          <span className="px-4 py-2 rounded-full border border-slate-400">React</span>
          <span className="px-4 py-2 rounded-full border border-slate-400">SQL</span>
        </div>
      </div>

      <Secao id="experiences">
        <Experiencias />
      </Secao>
    </div>
  )
}

export default App