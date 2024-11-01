"use client";
import React from "react";

const Events = () => {
  // Sample data for demo events
  const events = [
    {
      id: 1,
      title: "Blockchain Workshop",
      date: "Nov 10, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Online",
      description: "Learn the fundamentals of blockchain technology and smart contracts.",
    },
    {
      id: 2,
      title: "Decentralized Finance Conference",
      date: "Nov 15, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "San Francisco",
      description: "Explore the latest trends in DeFi with industry experts.",
    },
    {
      id: 3,
      title: "Smart Contract Coding Bootcamp",
      date: "Nov 20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "New York",
      description: "A one-day bootcamp to help you code and deploy smart contracts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 via-purple-800 to-black flex flex-col items-center py-10 text-white">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Upcoming Events</h1>

      {/* Events Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl">
        {events.map((event) => (
          <div key={event.id} className="bg-gradient-to-b from-purple-600 to-purple-800 p-6 rounded-lg shadow-md space-y-4 transform hover:scale-105 transition-transform duration-200">
            {/* Event Title */}
            <h2 className="text-2xl font-semibold text-blue-300">{event.title}</h2>

            {/* Event Date and Time */}
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-gray-400">Date:</span> {event.date}
            </p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-gray-400">Time:</span> {event.time}
            </p>

            {/* Event Location */}
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-gray-400">Location:</span> {event.location}
            </p>

            {/* Event Description */}
            <p className="text-gray-300">{event.description}</p>

            {/* Join Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-sm font-semibold py-2 rounded-lg transition duration-150">
              Join Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
