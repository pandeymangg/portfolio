import { useTheme } from 'next-themes';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className='text-gray-600 dark:text-gray-100'>
      <button
        name='theme-toggler'
        className='cursor-pointer'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <div className='mt-2 p-1 hidden dark:block'>
          <BsSun />
        </div>

        <div className='mt-2 p-1 block dark:hidden'>
          <BsMoon />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggler;
