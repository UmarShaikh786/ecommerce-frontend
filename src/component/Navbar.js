// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-amazon_blue p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="w-24 text-white bg-white"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <div className="flex items-center bg-white rounded overflow-hidden">
            <input
              type="text"
              className="p-2 flex-grow outline-none"
              placeholder="Search Amazon"
            />
            <button className="p-2 bg-yellow-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.415-1.414l4.243 4.243-1.415 1.414-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* User Account */}
          <div className="text-white">
            <p className="text-sm">Hello, Sign in</p>
            <p className="font-bold">Account & Lists</p>
          </div>

          {/* Orders */}
          <div className="text-white">
            <p className="text-sm">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          {/* Cart */}
          <div className="flex items-center text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 3a1 1 0 000 2h1l.342 2.044a2 2 0 001.902 1.546h9.512a2 2 0 001.902-1.546L17 5H5.859L5.5 3H3zm3 7a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
            <span className="ml-2">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
