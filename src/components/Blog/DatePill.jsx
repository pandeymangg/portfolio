import React from "react";

const DatePill = ({ date }) => {
  return (
    <div className="rounded-lg flex items-center justify-center text-gray-900 border-2 bg-primary border-primary py-[1px] md:px-[8px] px-[4px]">
      <span className="text-xs font-semibold tracking-tight">{date}</span>
    </div>
  );
};

export default DatePill;
