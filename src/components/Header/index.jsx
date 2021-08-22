import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white md:my-2 bg-opacity-60 fixed top-0 inset-x-0 z-10">
      <div className="nav-container w-full flex justify-between items-center">
        <div className="nav-heading">
          <h1 className="text-3xl font-bold text-gray-900">Anshuman Pandey</h1>
        </div>

        <div className="flex gap-8">
          <a
            href="https://anshuman9999.github.io/"
            className="text-base text-gray-600"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/anshuman9999"
            className="text-base text-gray-600"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
