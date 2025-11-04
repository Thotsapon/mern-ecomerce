import React, { useState } from 'react';
import userpic from '../images/user.png'
// Assuming 'user' is an object passed as a prop, e.g., { name: 'John Doe' }

const UserDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative"> {/* Use 'relative' for the dropdown container */}
      
      {/* Dropdown Toggle Button/Link */}
      <a
        href="#"
        onClick={toggleDropdown}
        className="flex items-center  rounded-lg text-gray-800 hover:bg-[#7A3DF2] hover:text-white px-1 py-1 transition duration-150 ease-in-out"
        // Prevent default link behavior if you don't want the page to jump
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* User Image (Rounded Circle) */}
        <img
          className="w-8 h-8 rounded-full mr-2 border border-[#7A3DF2] hover:border-[#8F8DF2]" // Tailwind equivalent for 'rounded-circle' and sizing
          src={userpic}
          alt="User Profile"
        />
        
        {/* User Name (Hidden on small screens, shown on large screens) */}
        <span className=" hidden lg:inline-flex font-medium">
          {user.name}
        </span>
      </a>

      {/* Dropdown Menu Content */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
          // Tailwind equivalent for 'dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0'
          // We use 'right-0' for 'dropdown-menu-end'
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            My Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Settings
          </a>
          {/* Separator if needed, e.g., <hr className="border-gray-100"/> */}
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Log Out
          </a>
        </div>
      )}
      
      {/* Optional: Close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={toggleDropdown}
        ></div>
      )}
      
    </div>
  );
};

export default UserDropdown;