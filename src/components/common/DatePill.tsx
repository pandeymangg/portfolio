import React from 'react';

const DatePill = ({ date }: { date: string }) => {
  return (
    <div className='rounded-lg flex items-center justify-center text-gray-900 border-2 bg-primary border-primary py-[4px] md:px-[10px] px-[6px]'>
      <span className='text-xs font-semibold tracking-tight'>{date}</span>
    </div>
  );
};

export default DatePill;
