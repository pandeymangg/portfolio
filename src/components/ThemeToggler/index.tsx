import { Conditional } from '@pandeymangg/react-conditional';
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
      <Conditional condition={mounted}>
        <button
          name='theme-toggler'
          className='cursor-pointer'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Conditional
            condition={theme === 'light'}
            fallback={
              <div className='mt-2 p-1'>
                <BsSun />
              </div>
            }
          >
            <div className='mt-2 p-1'>
              <BsMoon />
            </div>
          </Conditional>
        </button>
      </Conditional>
    </div>
  );
};

export default ThemeToggler;
