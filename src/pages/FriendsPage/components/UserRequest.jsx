import React, { useState } from "react";
import MaleIcon from "/man-user-circle-icon.svg";
import FemaleIcon from "/woman-user-circle-icon.svg";

const UserRequest = () => {
  const [requests, setRequests] = useState([
    { name: "Jerhon Gabutan", status: "online", icon: FemaleIcon },
    { name: "Clark Daot", status: "online", icon: MaleIcon },
    { name: "Haggai Estavilla", status: "online", icon: FemaleIcon },
    { name: "Aaron Bigno Idol", status: "online", icon: MaleIcon },
  ]);

  const handleAccept = (name) => {
    setRequests((prev) => prev.filter((r) => r.name !== name));
  };

  const handleDecline = (name) => {
    setRequests((prev) => prev.filter((r) => r.name !== name));
  };

  return (
    <div className="flex flex-col gap-2 mt-3 font-sans">
      {requests.map((person) => (
        <button
          key={person.name}
          className="flex items-start gap-2 p-3 full rounded-[15px] duration-300 ease-out border-gray-400 hover:shadow-lg hover:bg-gray-100 "
        >
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center xl:items-start gap-5 lg:items-center ">
            <img
              src={person.icon}
              alt={person.name}
              className="w-15 h-15 shadow-xl rounded-full cursor-pointer transition-all ease-in-out duration-100"
            />
            <div className="grid grid-cols-1">
              <div className="flex flex-col  items-start">
                <span className="font-semibold text-[25px] text-wrap">
                  {person.name}
                </span>

                <span className="font-normal text-[15px] text-wrap text-gray-500">
                  wants to be friends with you
                </span>
              </div>
            </div>
            <div className="flex gap-x-2">
              <button
                onClick={() => handleAccept(person.name)}
                className="button-blue "
              >
                Accept
              </button>
              <button
                onClick={() => handleDecline(person.name)}
                className="button-red"
              >
                Decline
              </button>
            </div>
          </div>
        </button>
      ))}
      {requests.length === 0 && (
        <div className="text-center text-gray-500 mt-4">
          No pending requests
        </div>
      )}
    </div>
  );
};

export default UserRequest;
