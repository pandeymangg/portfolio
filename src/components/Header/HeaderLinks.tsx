import React, { useEffect } from 'react';
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
  // const isActive = router.asPath === link;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (
          window.pageYOffset >= sectionTop - 60 &&
          window.pageYOffset <= sectionBottom - 60
        ) {
          document
            .querySelector(`a[href*=${sectionId}]`)
            ?.classList?.add('active');
        } else {
          document
            .querySelector(`a[href*=${sectionId}]`)
            ?.classList?.remove('active');
        }
      });
    });
  }, []);

  return (
    <Link href={link}>
      <a
        className={`text-base text-textSecondary dark:text-darkTextSecondary transition-all `}
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
