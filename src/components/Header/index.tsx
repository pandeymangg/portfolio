import React, { useState } from 'react';
import HeaderLinks from './HeaderLinks';
import ThemeToggler from '../ThemeToggler';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import { Conditional } from '@pandeymangg/react-conditional';
import { headerLinksArray } from '../../constants/headerLinks';

const Header = () => {
  const [phoneMenu, setPhoneMenu] = useState(false);

  return (
    <nav className='max-w-4xl px-8 py-4 md:py-0 md:h-20 flex items-center mx-auto my-0 z-50 header-backdrop sticky-nav'>
      <div className='nav-container w-full flex justify-between items-center'>
        <div className='nav-heading hidden md:block cursor-pointer'>
          <Link href='/'>
            <a>
              <h1 className='text-xl md:text-3xl font-bold'>Anshuman Pandey</h1>
            </a>
          </Link>
        </div>

        <div className='hidden md:flex gap-8 items-center'>
          <ThemeToggler />
          {headerLinksArray.map((headerLink) => (
            <HeaderLinks text={headerLink.text} link={headerLink.link} />
          ))}
        </div>

        <div className='md:hidden w-full'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <a>
                <h1 className='text-xl md:text-3xl font-bold'>
                  Anshuman Pandey
                </h1>
              </a>
            </Link>
            <div className='flex items-center gap-2'>
              <ThemeToggler />
              <div className='mt-0.5' onClick={() => setPhoneMenu(!phoneMenu)}>
                <BiMenu size={'1.2rem'} />
              </div>
            </div>
          </div>

          <Conditional condition={phoneMenu}>
            <div className='pb-4'>
              {headerLinksArray.map((headerLink) => (
                <div className='pt-1'>
                  <HeaderLinks
                    text={headerLink.text}
                    link={headerLink.link}
                    phoneMenu={phoneMenu}
                    setPhoneMenu={setPhoneMenu}
                  />
                </div>
              ))}
            </div>
          </Conditional>
        </div>
      </div>
    </nav>
  );
};

export default Header;
