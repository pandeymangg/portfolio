import React from "react";
import HeaderLinks from "./HeaderLinks";

const headerLinksArray = [
  {
    text: "Home",
    link: "/#home",
  },
  {
    text: "Experience",
    link: "/#experience",
  },
  {
    text: "Skills",
    link: "/#skills",
  },
  {
    text: "Projects",
    link: "/#projects",
  },
  {
    text: "Blog",
    link: "/blog",
  },
];

const Header = () => {
  return (
    <nav className="max-w-4xl w-ful h-20 flex items-center mx-auto my-0 bg-white bg-opacity-60 z-10 header-backdrop sticky-nav">
      <div className="nav-container w-full flex justify-between items-center">
        <div className="nav-heading">
          <h1 className="text-3xl font-bold text-gray-900">Anshuman Pandey</h1>
        </div>

        <div className="flex gap-8">
          {headerLinksArray.map((headerLink) => (
            <HeaderLinks text={headerLink.text} link={headerLink.link} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
