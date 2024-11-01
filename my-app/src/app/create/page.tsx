"use client";
import React, { useState } from "react";

const CreateEvent = () => {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-purple-900 to-black flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-gradient-to-br from-black via-gray-800 to-purple-900 text-gray-100 rounded-2xl shadow-xl p-8 space-y-6 border border-gray-700">

        {/* Header Section */}
        <div className="flex items-center justify-between">
          <span className="text-gray-300 font-semibold">Personal Calendar</span>
          <span
            className="text-gray-300 cursor-pointer font-medium px-3 py-1 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
            onClick={() => setIsPublic(!isPublic)}
          >
            {isPublic ? "Public" : "Private"}
          </span>
        </div>

        {/* Event Image */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230721/pngtree-3d-rendering-of-a-launching-rocket-image_3777838.jpg"
            alt="Event"
            className="w-full h-52 object-cover"
          />
          <span className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md">
            <i className="fas fa-camera text-gray-700"></i>
          </span>
        </div>

        {/* Event Name */}
        <input
          type="text"
          placeholder="Event Name"
          className="w-full bg-gray-800 text-white text-2xl font-semibold rounded-lg px-4 py-3 outline-none border border-gray-600 focus:border-purple-500 transition duration-150 placeholder-gray-400"
        />

        {/* Date and Time */}
        <div className="flex justify-between items-center space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-400 text-sm">Start</label>
            <input
              type="datetime-local"
              className="w-full bg-gray-800 text-gray-100 rounded-lg px-4 py-2 mt-1 outline-none border border-gray-600 focus:border-purple-500 transition duration-150"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-400 text-sm">End</label>
            <input
              type="datetime-local"
              className="w-full bg-gray-800 text-gray-100 rounded-lg px-4 py-2 mt-1 outline-none border border-gray-600 focus:border-purple-500 transition duration-150"
            />
          </div>
        </div>

        {/* Event Location */}
        <input
          type="text"
          placeholder="Add Event Location"
          className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none border border-gray-600 focus:border-purple-500 transition duration-150 placeholder-gray-400"
        />

        {/* Description */}
        <textarea
          placeholder="Add Description"
          className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none border border-gray-600 focus:border-purple-500 transition duration-150 placeholder-gray-400"
          rows={3}
        ></textarea>

        {/* Event Options */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Tickets</span>
            <span className="text-white">Free</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">Require Approval</span>
            <input type="checkbox" className="form-checkbox text-purple-600 rounded focus:ring-purple-500" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">Capacity</span>
            <span className="text-white">Unlimited</span>
          </div>
        </div>

        {/* Create Event Button */}
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold mt-4 shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 duration-150">
          Create Event
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
