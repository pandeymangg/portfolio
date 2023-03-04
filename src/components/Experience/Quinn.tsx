import React from 'react';
import DatePill from '../common/DatePill';
import { BsDot } from 'react-icons/bs';

const Quinn = () => {
  return (
    <div className='text-textSecondary dark:text-darkTextSecondary'>
      <div className='mb-4 flex justify-between items-center'>
        <h2 className='text-xl md:text-3xl font-semibold text-textPrimary dark:text-darkTextPrimary'>
          Quinn
        </h2>
        <DatePill date={'May 2021 - November 2021'} />
      </div>
      <div className='experience-pointers'>
        <ul className='flex flex-col gap-2 text-sm md:text-base'>
          <li className='flex gap-2 items-center'>
            <div>
              <BsDot size={'2rem'} />
            </div>
            <p>Converted designs to responsive web pages.</p>
          </li>

          <li className='flex gap-2 items-center'>
            <div>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Learnt{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                tailwindcss
              </span>{' '}
              and used it to make pixel perfect UI components,{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                writing robust, ready to go to production level code
              </span>
              .
            </p>
          </li>

          <li className='flex gap-2 items-center'>
            <div>
              <BsDot size={'2rem'} />
            </div>
            <p>
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                Built a blog for the web app
              </span>
              . Learnt a lot about{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                Content Management Systems (CMS)
              </span>{' '}
              and{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                static site generation (SSG) using next.js
              </span>
              . Used notion as a CMS for the blog.
            </p>
          </li>

          <li className='flex gap-2 items-center'>
            <div>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Learnt next.js and implemented ways to make the web app more
              performant,{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                including optimizing images, lazy loading data, preloading site
                resources
              </span>{' '}
              and so on.
            </p>
          </li>

          <li className='flex gap-2 items-center'>
            <div>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Learnt{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                react query
              </span>{' '}
              and implemented hooks for data fetching and caching.
            </p>
          </li>

          <li className='flex gap-2 items-center'>
            <div>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Learnt{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
                Shopify
              </span>{' '}
              app and theme development and worked on making a shopify plugin
              that lets brands display their best products' videos in a tik-tok
              like inteface
            </p>
          </li>

          <li className='flex gap-2 items-center'>
            <div>
              <BsDot size={'2rem'} />
            </div>
            <p>
              Worked on handling videos on a web app. Did a lot performance
              optimizations by techniques like lazy-loading, etc.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Quinn;
