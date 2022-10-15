import React from 'react';
import Link from 'next/link';

interface IHeaderLinksProps {
  text: string;
  link: string;
  phoneMenu?: boolean;
  setPhoneMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderLinks = ({
  text,
  link,
  phoneMenu,
  setPhoneMenu,
}: IHeaderLinksProps) => {
  return (
    <Link href={link}>
      <a className='text-base text-gray-600 dark:text-gray-100'>
        <span
          onClick={() => {
            if (phoneMenu) setPhoneMenu?.(!phoneMenu);
          }}
        >
          {text}
        </span>
      </a>
    </Link>
  );
};

export default HeaderLinks;
