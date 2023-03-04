import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const isActive = router.asPath === link;

  return (
    <Link href={link}>
      <a
        className={`text-base text-textSecondary dark:text-darkTextSecondary transition-all ${
          isActive ? 'font-bold border-0 md:border-b-4 border-primary' : ''
        }`}
      >
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
