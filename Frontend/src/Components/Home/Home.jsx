import React from "react";
import { useState, useEffect } from "react";
import Clock from "./Clock/Clock";

function Home() {
  const [location, setLocation] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-e rounded-lg shadow-lg bg-white">
        <div className="flex items-center justify-center h-96 mb-6 rounded-lg bg-white">
          <div className="grid grid-cols-10 gap-4 w-full h-full">
            {/* Left Box (60%) */}
            <div className="col-span-6 flex flex-col gap-4 mb-6 h-full">
              <div className="flex flex-col items-start p-4 h-20 rounded-lg bg-gradient-to-r from-sky-100 to-sky-200 shadow-md w-full">
                <p className="text-2xl font-bold text-sky-800">HOME</p>
                <p className="text-xs text-sky-600 font-medium">
                  Powered by Openweather Map
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

export default Home;
