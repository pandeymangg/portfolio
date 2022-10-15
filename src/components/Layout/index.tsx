import React from 'react';
import Head from 'next/head';

interface ILayoutProps {
  docTitle: string;
  metaDescription: string;
  children: React.ReactElement;
}

const Layout = ({ docTitle, metaDescription, children }: ILayoutProps) => {
  return (
    <div className='layout bg-white dark:bg-darkBg text-gray-50 dark:text-gray-900'>
      <Head>
        {docTitle && <title>{docTitle}</title>}

        {metaDescription && (
          <meta name='description' content={metaDescription}></meta>
        )}
      </Head>
      {children}
    </div>
  );
};

export default Layout;
