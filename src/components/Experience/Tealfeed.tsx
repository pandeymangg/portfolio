import React from 'react';
import { BsDot } from 'react-icons/bs';
import DatePill from '../common/DatePill';

const Tealfeed = () => {
  return (
    <div className='text-textSecondary dark:text-darkTextSecondary'>
      <div className='mb-4 flex justify-between items-center'>
        <h2 className='text-xl md:text-3xl font-semibold text-textPrimary dark:text-darkTextPrimary'>
          Tealfeed
        </h2>
        <DatePill date={'July 2022 - Present'} />
      </div>
      <div className='experience-pointers'>
        <ul className='flex flex-col gap-2 text-sm md:text-base'>
          <li className='flex gap-2 items-center'>
            <div>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Migrated all the API fetching logic on the frontend to{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                react query
              </span>
              - extensively used react query for{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                caching, optimnistic updates, infinite loaders
              </span>{' '}
              and so on.
            </p>
          </li>

          <li className='flex gap-2 items-center'>
            <div>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Developed the frontend for{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                Tealfeed Creators' Program
              </span>
              , our flagship product, making pixel perfect UI in the process.
            </p>
          </li>

          <li className='flex gap-2 items-center'>
            <div>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Made the frontend code of the whole app{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                typse-safe with TypeScript
              </span>
              .
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tealfeed;
