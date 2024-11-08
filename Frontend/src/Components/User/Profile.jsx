import React from "react";
import { useState } from "react";

function Profile() {
  const [name, setName] = useState("Bhumika Goyal");
  const [email, setEmail] = useState("bgoyal_be21@thapar.edu");
  const [age, setAge] = useState("40");
  const [registeredDate, setRegisteredDate] = useState("2024-06-20");
  const [organization, setOrganization] = useState(
    "Thapar Institute of Engineering and Technology"
  );

  return (
    <div className="min-h-screen min-w-[730px] bg-gray-50  p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-50 border-e rounded-lg shadow-lg bg-gray-50">
        <h1 className="text-5xl font-extrabold text-green-700 mb-8 text-center">
          Smart Hydroponics System
        </h1>

        <div className="w-full min-h-screen md:w-full md:px-4 mb-8">
          <div className="bg-green-100 p-6 rounded-lg shadow-lg border border-slate-100">
            <h3 className="text-2xl mb-4 text-center border-b-2 border-gray-500 pb-2">
              {/* Welcome{" "} */}WELCOME
            </h3>

            <div className="flex flex-col space-y-2 px-8 text-lg">
              <p className="flex justify-between">
                <span className="font-bold">Name:</span>
                <span>{name || "Loading..."}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-bold">Email:</span>
                <span>{email || "Loading..."}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-bold">Registered Date:</span>
                <span>
                  {new Date(registeredDate).toLocaleDateString() ||
                    "Loading..."}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="font-bold">Age:</span>
                {/* <span>
                  {age
                    ? Math.floor((new Date() - new Date(age)) / 31557600000) +
                      " Years"
                    : "Loading..."}
                </span>{" "} */}
                <span>{age ? `${age} years` : "Loading..."}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-bold">Organization:</span>
                <span>{organization || "Loading..."}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
