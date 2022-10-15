import React, { useEffect, useState } from 'react';
import HeaderLinks from './HeaderLinks';
import { useTheme } from 'next-themes';
import ThemeToggler from '../ThemeToggler';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';

const headerLinksArray = [
  {
    text: 'Home',
    link: '/#home',
  },
  {
    text: 'Experience',
    link: '/#experience',
  },
  {
    text: 'Skills',
    link: '/#skills',
  },
  {
    text: 'Projects',
    link: '/#projects',
  },
  {
    text: 'Blog',
    link: '/blog',
  },
];

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [phoneMenu, setPhoneMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className='max-w-4xl px-8 py-4 md:py-0 md:h-20 flex items-center mx-auto my-0 z-50 header-backdrop sticky-nav'>
      <div className='nav-container w-full flex justify-between items-center'>
        <div className='nav-heading hidden md:block cursor-pointer'>
          <Link href='/'>
            <a>
              <h1 className='text-xl md:text-3xl font-bold text-gray-900 dark:text-gray-200'>
                Anshuman Pandey
              </h1>
            </a>
          </Link>
        </div>

        <div className='hidden md:flex gap-8 items-center'>
          <ThemeToggler mounted={mounted} theme={theme} setTheme={setTheme} />
          {headerLinksArray.map((headerLink) => (
            <HeaderLinks text={headerLink.text} link={headerLink.link} />
          ))}
        </div>

        <div className='md:hidden w-full'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <a>
                <h1 className='text-xl md:text-3xl font-bold text-gray-900 dark:text-gray-200'>
                  Anshuman Pandey
                </h1>
              </a>
            </Link>
            <div className='flex items-center gap-2'>
              <ThemeToggler
                mounted={mounted}
                theme={theme}
                setTheme={setTheme}
              />
              <div
                className='text-gray-900 dark:text-gray-200 mt-0.5'
                onClick={() => setPhoneMenu(!phoneMenu)}
              >
                <BiMenu size={'1.2rem'} />
              </div>
            </div>
          </div>

          {phoneMenu && (
            <div className='pb-4'>
              {headerLinksArray.map((headerLink) => (
                <div className={`pt-1`}>
                  <HeaderLinks
                    text={headerLink.text}
                    link={headerLink.link}
                    phoneMenu={phoneMenu}
                    setPhoneMenu={setPhoneMenu}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
