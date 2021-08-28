import React from "react";

const DatePill = ({ date }) => {
  return (
    <div className="rounded-full flex items-center justify-center text-gray-900 dark:text-gray-50 border-2 bg-primary border-primary dark:bg-darkPrimary dark:border-darkPrimary py-[1px] px-[8px]">
      <span className="text-xs font-semibold tracking-tight">{date}</span>
    </div>
  );
};

export default DatePill;
