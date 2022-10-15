import React from 'react';
import DatePill from '../common/DatePill';
import { BsDot } from 'react-icons/bs';

const Trell = () => {
  return (
    <div>
      <div className='mb-4 flex justify-between items-center'>
        <h2 className='text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-50'>
          Trell
        </h2>
        <DatePill date={'February 2022 - June 2022'} />
      </div>
      <div className='experience-pointers'>
        <ul className='flex flex-col gap-2 text-sm md:text-base text-gray-600 dark:text-gray-100'>
          <li className='flex gap-2 items-center'>
            <div className='text-black dark:text-white'>
              <BsDot size={'2rem'} />
            </div>
            <p>Working with the Front-End team on Trell Shop</p>
          </li>

          <li className='flex gap-2 items-center'>
            <div className='text-black dark:text-white'>
              <BsDot size={'2rem'} />
            </div>
            <p>Implemented storybook stories for various components</p>
          </li>

          <li className='flex gap-2 items-center'>
            <div className='text-black dark:text-white'>
              <BsDot size={'2rem'} />
            </div>
            <p>Using technologies like React.js, Next.js, TypeScript</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Trell;
