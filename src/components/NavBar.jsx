import React from "react";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <nav className="bg-slate-800 shadow-lg flex items-center justify-between py-3 px-6 md:px-12 lg:px-16 fixed top-0 left-0 w-full z-50">
      
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
          <BiLogoReact className="text-3xl md:text-4xl" />
          <span>Kayk.</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-5">
        <a
          href="#home"
          className="py-1 px-3 text-lg text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Home
        </a>

        <a
          href="#contact"
          className="py-1 px-3 text-lg text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Contact
        </a>

        <a
          href="#about"
          className="py-1 px-3 text-lg text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          About
        </a>

        <a
          href="#experiences"
          className="py-1 px-3 text-lg text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Experiences
        </a>
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-full bg-slate-700 text-white hover:bg-slate-600 transition"
        >
            {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;