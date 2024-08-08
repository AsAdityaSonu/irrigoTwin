import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:ml-64">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <div className="p-4 border-2 border-gray-200 border-e rounded-lg shadow-lg bg-white">
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="flex items-center h-14  rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 shadow-md w-full">
            <p className="text-2xl font-semibold text-blue-800 ml-4">DASHBOARD</p>
          </div>
          {/* <div className="flex items-center justify-center h-24 rounded-lg bg-gradient-to-r from-green-100 to-green-200 shadow-md">
            <p className="text-2xl font-semibold text-green-800">Hi 2</p>
          </div>
          <div className="flex items-center justify-center h-24 rounded-lg bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-md">
            <p className="text-2xl font-semibold text-yellow-800">Hi 3</p>
          </div> */}
        </div>
        <div className="flex items-center justify-center h-48 mb-6 rounded-lg bg-gradient-to-r from-red-100 to-red-200 shadow-md">
          <p className="text-2xl font-semibold text-red-800">Hello Hi 1</p>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex items-center justify-center h-28 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 shadow-md">
            <p className="text-2xl font-semibold text-purple-800">Hi 4</p>
          </div>
          <div className="flex items-center justify-center h-28 rounded-lg bg-gradient-to-r from-pink-100 to-pink-200 shadow-md">
            <p className="text-2xl font-semibold text-pink-800">Hi 5</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-48 mb-6 rounded-lg bg-gradient-to-r from-indigo-100 to-indigo-200 shadow-md">
          <p className="text-2xl font-semibold text-indigo-800">Aaye haye</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center justify-center h-28 rounded-lg bg-gradient-to-r from-teal-100 to-teal-200 shadow-md">
            <p className="text-2xl font-semibold text-teal-800">oye hoi</p>
          </div>
          <div className="flex items-center justify-center h-28 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 shadow-md">
            <p className="text-2xl font-semibold text-orange-800">bado badi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
