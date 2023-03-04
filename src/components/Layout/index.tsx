import React from 'react';
import Head from 'next/head';
import { Conditional } from '@pandeymangg/react-conditional';

interface ILayoutProps {
  docTitle: string;
  metaDescription: string;
  children: React.ReactNode;
}

const Layout = ({ docTitle, metaDescription, children }: ILayoutProps) => {
  return (
    <div className='layout bg-bgPrimary dark:bg-darkBgPrimary text-textPrimary dark:text-darkTextPrimary'>
      <Head>
        <Conditional condition={!!docTitle}>
          <title>{docTitle}</title>
        </Conditional>

        <Conditional condition={!!metaDescription}>
          <meta name='description' content={metaDescription}></meta>
        </Conditional>
      </Head>

      {children}
    </div>
  );
};

export default Layout;
