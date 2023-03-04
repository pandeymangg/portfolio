import React from 'react';
import Head from 'next/head';

interface ILayoutProps {
  docTitle: string;
  metaDescription: string;
  children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { docTitle, metaDescription, children } = props;

  return (
    <div className='layout bg-bgPrimary dark:bg-darkBgPrimary text-textPrimary dark:text-darkTextPrimary'>
      <Head>
        <title>{docTitle}</title>
        <meta name='description' content={metaDescription}></meta>
      </Head>

      <>{children}</>
    </div>
  );
};

export default Layout;
