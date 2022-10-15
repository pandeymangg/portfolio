import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

interface IThemeTogglerProps {
  mounted: boolean;
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeToggler = ({ mounted, theme, setTheme }: IThemeTogglerProps) => {
  return (
    <div className='text-gray-600 dark:text-gray-100'>
      {mounted && (
        <button
          name='theme-toggler'
          className='cursor-pointer'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'light' ? (
            <div className='mt-2 p-1'>
              <BsMoon />
            </div>
          ) : (
            <div className='mt-2 p-1'>
              <BsSun />
            </div>
          )}
        </button>
      )}
    </div>
  );
};

export default ThemeToggler;
