/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiDownload, FiSearch } from "react-icons/fi"; // Import used icons
import AuthModal from "../AuthModal/AuthModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="src/Components/Images/pixelcut-exyuiport.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Center Navbar */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notes"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Notes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/question-paper"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Question Papers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right Most Icons and Profile Dropdown */}
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="your-existing-button-classes"
              >
                Login / Sign Up
              </button>
              <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
              />
            </Link>

            {/* Profile Icon with Dropdown */}
            <div className="relative pr-5">
              <img
                alt="Profile"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-10 w-10 cursor-pointer rounded-full object-cover object-center"
                onClick={toggleDropdown} // Toggle dropdown on click
              />
              {isOpen && (
                <ul
                  role="menu"
                  className="absolute right-0 z-10 min-w-[180px] max-h-[300px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none"
                >
                  <li
                    role="menuitem"
                    className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-slate-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 10 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-slate-800 font-medium ml-2">
                      My Profile
                    </p>
                  </li>

                  <li
                    role="menuitem"
                    className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-slate-400"
                    >
                      <path d="M8.157 4.818a2.086 2.086 0 1 1 3.686 0l3.74 6.885a2.086 2.086 0 0 1-1.843 3.09H6.26a2.086 2.086 0 0 1-1.843-3.09l3.74-6.885ZM10 3a3.333 3.333 0 0 0-2.94 1.757L3.32 11.643A3.333 3.333 0 0 0 6.261 16h7.478a3.333 3.333 0 0 0 2.94-4.357l-3.74-6.885A3.333 3.333 0 0 0 10 3Zm0 9.167a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333Z" />
                    </svg>
                    <p className="text-slate-800 font-medium ml-2">Security</p>
                  </li>

                  <li
                    role="menuitem"
                    className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-slate-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 5a3 3 0 0 1 6 0v1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2V5ZM6 9v6h8V9H6Zm2.5-4a1.5 1.5 0 0 1 3 0v1h-3V5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-slate-800 font-medium ml-2">Password</p>
                  </li>

                  <li
                    role="menuitem"
                    className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-slate-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.854 7.854a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 1 0-.708.708L7.293 7.5 6.646 8.146a.5.5 0 0 0 .708.708l1.5-1.5Zm3.292 4.292a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708.708L10.293 11.5l-.647.646a.5.5 0 0 0 .708.708l1.5-1.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-slate-800 font-medium ml-2">Settings</p>
                  </li>

                  <li
                    role="menuitem"
                    className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-slate-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 13.293a1 1 0 0 1-1.414 1.414L10 9.414 4.707 14.707a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-slate-800 font-medium ml-2">Logout</p>
                  </li>
                </ul>
              )}
            </div>

            {/* <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Explore More
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

// // Header.js
// import React from "react";
// import { Link, NavLink } from 'react-router-dom';
// import Dropdown from "../Dropdown/Dropdown";

// export default function Header() {
//     return (
//         <header className="shadow sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

//                     {/* Logo */}
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src="src/Components/Images/pixelcut-exyuiport.png"
//                             className="mr-3 h-12"
//                             alt="Logo"
//                         />
//                     </Link>

//                     {/* Right Most */}
//                     <div className="flex items-center lg:order-2">
//                         <Link
//                             to="#"
//                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Log in
//                         </Link>
//                         <Link
//                             to="#"
//                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Explore More
//                         </Link>
//                         {/* Dropdown for User Profile */}
//                         <Dropdown />
//                     </div>

//                     {/* Center Navbar */}
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/notes"
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Notes
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/question-paper"
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Question Papers
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/about"
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/contact"
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }
