import React from "react";
import Link from "next/link";

const HeaderLinks = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className="text-base text-gray-600">{text}</a>
    </Link>
  );
};

export default HeaderLinks;
