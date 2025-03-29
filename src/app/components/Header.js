"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Bell, Menu, X, LayoutDashboard } from 'lucide-react';

const Header = ({ onNavToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between p-2 md:p-4 bg-white shadow-md relative">
     
        <div className="flex items-center gap-2 md:ml-8 border-r pr-2 md:pr-4 min-w-[120px] md:min-w-[200px]">
          
          {onNavToggle && (
            <button 
              onClick={onNavToggle}
              className="md:hidden p-1 mr-1"
              aria-label="Toggle navigation"
            >
              <LayoutDashboard size={20} />
            </button>
          )}
          
          <Image 
            src="/logo.PNG" 
            alt="Logo" 
            width={80} 
            height={80} 
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span className="text-sm md:text-lg font-semibold hidden md:block">Chuby</span>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center gap-2 px-3 py-1 rounded-full ml-[190px]">
          <input 
            type="text" 
            placeholder="Search" 
            className="p-2 pl-10 border border-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full max-w-md" 
          />
          <button className="px-4 md:px-8 py-1 md:py-2 border-2 border-gray-700 focus:border-pink-60 text-dark rounded-full text-sm md:text-base">
            Filter
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
         
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4 md:mr-9">
          <Bell className="text-red-500 w-5 h-5" />
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 w-full z-10 border-t">
          <div className="flex flex-col space-y-4">
           
            <div className="flex items-center gap-4 pb-4 border-b">
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">User Name</p>
                <p className="text-sm text-gray-500">user@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <Bell className="text-red-500 w-5 h-5" />
              <span>Notifications</span>
            </div>

            <div className="w-full pt-2">
              <input 
                type="text" 
                placeholder="Search" 
                className="p-2 pl-4 w-full border border-indigo-300 rounded-full focus:outline-none focus:ring-1 focus:ring-indigo-200"
              />
            </div>

            <button className="w-full py-2 border-2 border-gray-700 rounded-full text-sm font-medium mt-2">
              Filter
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;