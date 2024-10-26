import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1); // Get the section id
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">SycamoRe</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} onClick={scrollToSection}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          <div className="hidden lg:flex">
            <Link
              to="/chat" // Updated to navigate to Chat Feed
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-3 ml-4 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
            >
              Go to Chat
            </Link>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} onClick={scrollToSection}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/chat" // Updated to Link for mobile menu as well
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-4 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
            >
              Go to Chat
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

