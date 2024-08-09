import React from "react";
import Clock from "../boxComponents/Clock/Clock";

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
        <div className="flex items-center justify-center h-96 mb-6 rounded-lg bg-white">
          <div className="grid grid-cols-10 gap-4 w-full h-full">
            {/* Left Box (60%) */}
            <div className="col-span-6 flex flex-col gap-4 mb-6 h-full">
              <div className="flex flex-col items-start p-4 h-20 rounded-lg bg-gradient-to-r from-sky-100 to-sky-200 shadow-md w-full">
                <p className="text-2xl font-bold text-sky-800">DASHBOARD</p>
                <p className="text-xs text-sky-600 font-medium">
                  Real Time Data
                </p>
              </div>
              {/* New Boxes */}
              <div className="flex-1 grid grid-cols-10 gap-4 w-full">
                {/* Left Box (50%) */}
                <div className="col-span-5 bg-lime-100 rounded-lg shadow-md p-4 h-full">
                  <p className="text-sm font-medium text-lime-800">Left Box</p>
                </div>
                {/* Right Box (50%) */}
                <div className="col-span-5 bg-amber-100 rounded-lg shadow-md p-4 h-full">
                  <p className="text-sm font-medium text-amber-800">
                    Right Box
                  </p>
                </div>
              </div>
            </div>
            {/* Right Box (40%) */}
            <div className="col-span-4 bg-rose-100 rounded-lg shadow-md h-full">
              <Clock />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-48 mb-6 rounded-lg bg-gradient-to-r from-pink-100 to-pink-200 shadow-md">
          <p className="text-2xl font-semibold text-pink-800">Hello Hi 1</p>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex items-center justify-center h-28 rounded-lg bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 shadow-md">
            <p className="text-2xl font-semibold text-fuchsia-800">Hi 4</p>
          </div>
          <div className="flex items-center justify-center h-28 rounded-lg bg-gradient-to-r from-cyan-100 to-cyan-200 shadow-md">
            <p className="text-2xl font-semibold text-cyan-800">Hi 5</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-48 mb-6 rounded-lg bg-gradient-to-r from-lime-100 to-lime-200 shadow-md">
          <p className="text-2xl font-semibold text-lime-800">Aaye haye</p>
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
