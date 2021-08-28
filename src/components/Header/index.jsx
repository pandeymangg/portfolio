import React, { useEffect, useState } from "react";
import HeaderLinks from "./HeaderLinks";
import { useTheme } from "next-themes";
import ThemeToggler from "../ThemeToggler";

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
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="max-w-4xl px-8 h-20 flex items-center mx-auto my-0 z-10 header-backdrop sticky-nav">
      <div className="nav-container w-full flex justify-between items-center">
        <div className="nav-heading">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">
            Anshuman Pandey
          </h1>
        </div>

        <div className="flex gap-8">
          <ThemeToggler mounted={mounted} theme={theme} setTheme={setTheme} />
          {headerLinksArray.map((headerLink) => (
            <HeaderLinks text={headerLink.text} link={headerLink.link} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
