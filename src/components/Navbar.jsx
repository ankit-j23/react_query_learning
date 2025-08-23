import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50 px-6">
      {/* Brand */}
      <div className="flex-1">
        <a className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition-colors">
          NewsNow
        </a>
      </div>

      {/* Nav Links (Desktop) */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link
          to={"/"}
          className="hover:text-blue-600 hover:underline underline-offset-4 transition-colors"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="hover:text-blue-600 hover:underline underline-offset-4 transition-colors"
        >
          About
        </Link>
      </div>

      {/* Search */}
      <div className="ml-6 hidden md:block">
        <input
          type="text"
          placeholder="Search news..."
          className="input input-sm input-bordered rounded-full w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white shadow rounded-lg mt-3 w-52"
        >
          <li>
            <Link to={"/"} className="hover:bg-blue-50">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:bg-blue-50">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
