import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        AI Blog
      </h1>
      <ul className="flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
        <li className="cursor-pointer hover:text-blue-500">Home</li>
        <li className="cursor-pointer hover:text-blue-500">Explore</li>
        <li className="cursor-pointer hover:text-blue-500">Write</li>
        <li className="cursor-pointer hover:text-blue-500">Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
