import React from "react";

const ThemeToggler = ({ mounted, theme, setTheme }) => {
  return (
    <div>
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
