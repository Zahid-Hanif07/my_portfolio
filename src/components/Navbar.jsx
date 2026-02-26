// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["Home", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo (removed text) */}
        <NavLink to="/" className="text-2xl font-bold tracking-tight"></NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <NavLink
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-300 ${isActive ? "text-blue-400" : "text-gray-300 hover:text-white"}`
              }
            >
              {link}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)} className="p-2">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-white/10 flex flex-col gap-4 p-6 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <NavLink
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
