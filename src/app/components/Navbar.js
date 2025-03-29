"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu, Home, User, Heart, Users, FileText, Eye, Settings, Power } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <Home size={20} />, link: "/Dashboard" },
  { name: "My Profile", icon: <User size={20} />, link: "/Profile" },
  { name: "Favorites", icon: <Heart size={20} />, link: "#" },
  { name: "My Mutuals", icon: <Users size={20} />, link: "#" },
  { name: "My Subscribed", icon: <FileText size={20} />, link: "#" },
  { name: "Interested in me", icon: <Eye size={20} />, link: "#" },
  { name: "Settings", icon: <Settings size={20} />, link: "#" },
  { name: "Logout", icon: <Power size={20} />, link: "#" },
];

function Navbar({ mobileMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  useEffect(() => {
    if (mobileMode) {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, mobileMode]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
     
      <nav className="p-5 flex items-center gap-10">
        <button 
          onClick={toggleNav}
          className="text-black hover:text-gray-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && mobileMode && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"
          onClick={toggleNav}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed bg-white text-black h-full w-[250px] top-0 left-0 pt-5 pl-6 shadow-xl transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${mobileMode ? "z-30" : "z-10"}`}
      >
        <div className="h-full flex flex-col">
       
          <button 
            onClick={toggleNav}
            className="absolute top-5 right-5 text-black hover:text-gray-600"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <div className="mb-6 flex flex-col items-center pt-6">
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              width={80} 
              height={80} 
              className="rounded-full border-2 border-gray-200"
              priority
            />
            <h2 className="mt-3 text-lg font-medium">Your Profile</h2>
          </div>

          <ul className="flex-1 space-y-2 overflow-y-auto pb-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    active === item.name 
                      ? "bg-red-500 text-white hover:bg-red-600" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setActive(item.name);
                    if (mobileMode) setIsOpen(false);
                  }}
                >
                  <span className="[&>svg]:w-5 [&>svg]:h-5">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;