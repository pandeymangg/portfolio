import React from "react";

const ThemeToggler = ({ mounted, theme, setTheme }) => {
  return (
    <div className="text-gray-600 dark:text-gray-100">
      {mounted && (
        <button
          className="cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle
        </button>
      )}
    </div>
  );
};

export default ThemeToggler;
