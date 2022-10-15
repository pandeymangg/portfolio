import React from 'react';
import { BsDot } from 'react-icons/bs';
import DatePill from '../common/DatePill';

const Tealfeed = () => {
  return (
    <div>
      <div className='mb-4 flex justify-between items-center'>
        <h2 className='text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-50'>
          Tealfeed
        </h2>
        <DatePill date={'July 2022 - Present'} />
      </div>
      <div className='experience-pointers'>
        <ul className='flex flex-col gap-2 text-sm md:text-base text-gray-600 dark:text-gray-100'>
          <li className='flex gap-2 items-center'>
            <div className='text-black dark:text-white'>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Migrated all the API fetching logic on the frontend to{' '}
              <span className='font-semibold'>react query</span>- extensively
              used react query for{' '}
              <span className='font-semibold'>
                caching, optimnistic updates, infinite loaders
              </span>{' '}
              and so on.
            </p>
          </li>

          <li className='flex gap-2 items-center'>
            <div className='text-black dark:text-white'>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Developed the frontend for{' '}
              <span className='font-semibold'>Tealfeed Creators' Program</span>,
              our flagship product, making pixel perfect UI in the process.
            </p>
          </li>

          <li className='flex gap-2 items-center'>
            <div className='text-black dark:text-white'>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Made the frontend code of the whole app{' '}
              <span className='font-semibold'>typse-safe with TypeScript</span>.
            </p>
            <p></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tealfeed;
