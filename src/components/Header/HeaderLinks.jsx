import React from "react";
import Link from "next/link";

const HeaderLinks = ({ text, link, phoneMenu = null, setPhoneMenu }) => {
  return (
    <Link href={link}>
      <a className="text-base text-gray-600 dark:text-gray-100">
        <span
          onClick={() => {
            if (phoneMenu) setPhoneMenu(!phoneMenu);
          }}
        >
          {text}
        </span>
      </a>
    </Link>
  );
};

export default HeaderLinks;
