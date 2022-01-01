import React from "react";

const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className="flex items-center justify-center"
    >
      <div className="mr-4 rounded-full px-6 md:px-8 py-2 bg-primary flex items-center justify-center">
        <span className="text-xs md:text-sm text-black font-semibold tracking-normal">
          {text}
        </span>
      </div>
    </a>
  );
};

export default Button;
