import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggler = ({ mounted, theme, setTheme }) => {
  return (
    <div className="text-gray-600 dark:text-gray-100">
      {mounted && (
        <button
          className="cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? (
            <div className="mt-2 p-1">
              <BsMoon />
            </div>
          ) : (
            <div className="mt-2 p-1">
              <BsSun />
            </div>
          )}
        </button>
      )}
    </div>
  );
};

export default ThemeToggler;
