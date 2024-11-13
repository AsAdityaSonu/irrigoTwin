import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LeftPanel() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Button for toggling sidebar on small screens */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden p-2 m-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-200 text-gray-700 z-50"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 shadow-lg border-gray-50`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <NavLink to="/" className="flex items-center ps-2.5 mb-5">
            <img
              src="/logo.png"
              className="h-6 me-3 sm:h-7"
              alt="AgriTwinTech"
            />
            <span
              className="self-center text-xl font-semibold whitespace-nowrap text-gray-900"
              style={{ fontFamily: "Play, sans-serif" }}
            >
              IrrigoTwin
            </span>
          </NavLink>
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg  ${
                    isActive
                      ? "bg-[#9afcd9] text-gray-900 group"
                      : "text-gray-500 hover:bg-gray-100 group"
                  }`
                }
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="2 3 19 18"
                >
                  <path d="M3 12l1.41 1.41L12 5.83l7.59 7.58L21 12l-9-9-9 9z" />
                  <path d="M12 7.83L5 14.83V19h4v-3h6v3h4v-4.17l-7-7z" />
                </svg>
                <span className="flex-1 ms-3">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg  ${
                    isActive
                      ? "bg-[#9afcd9] text-gray-900 group"
                      : "text-gray-500 hover:bg-gray-100 group"
                  }`
                }
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium bg-gray-200 rounded-full">
                  Live
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg  ${
                    isActive
                      ? "bg-[#9afcd9] text-gray-900 group"
                      : "text-gray-500 hover:bg-gray-100 group"
                  }`
                }
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/controls"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "bg-[#9afcd9] text-gray-900 group"
                      : "text-gray-500 hover:bg-gray-100 group"
                  }`
                }
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Control</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/digitalTwin"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "bg-[#9afcd9] text-gray-900 group"
                      : "text-gray-500 hover:bg-gray-100 group"
                  }`
                }
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"
                  />
                  <polyline
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    points="3.27 6.96 12 12.01 20.73 6.96"
                  />
                  <line
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="12"
                    y1="22.08"
                    x2="12"
                    y2="12"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Digital Twin
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg  ${
                    isActive
                      ? "bg-[#9afcd9] text-gray-900 group"
                      : "text-gray-500 hover:bg-gray-100 group"
                  }`
                }
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default LeftPanel;
