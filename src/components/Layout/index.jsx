import React from "react";
import Head from "next/head";

const Layout = ({ docTitle, metaDescription, children }) => {
  return (
    <div className="layout bg-white dark:bg-gray-900 text-gray-50 dark:text-gray-900">
      <Head>
        {docTitle && <title>{docTitle}</title>}

        {metaDescription && (
          <meta name="description" content={metaDescription}></meta>
        )}
      </Head>
      {children}
    </div>
  );
};

export default Layout;
