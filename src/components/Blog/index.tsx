import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import BlogCard from './BlogCard';

interface IBlogProps {
  postsData: {
    data: {
      [key: string]: any;
    };
    content: string;
    slug: string;
  }[];
}

const Blog = ({ postsData }: IBlogProps) => {
  return (
    <section className='blog h-screen pt-20 flex flex-col px-8'>
      <div className='max-w-2xl flex flex-col mx-auto gap-8'>
        <div>
          <h1 className='text-5xl font-bold tracking-tight text-center'>
            Blog
          </h1>
        </div>

        <div className='flex flex-col gap-2 text-textSecondary dark:text-darkTextSecondary'>
          <div className='flex gap-2 items-center md:justify-center'>
            <span className='text-[#097969]'>
              <BsCheckCircle />
            </span>
            <p>
              Built with{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextSecondary'>
                next.js
              </span>
              ,{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextSecondary'>
                tailwindcss
              </span>
              ,{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextSecondary'>
                markdown
              </span>
            </p>
          </div>
          <div className='flex gap-2 items-center md:justify-center'>
            <span className='text-[#097969]'>
              <BsCheckCircle />
            </span>
            <p>
              Static site generated with next.js{' '}
              <span className='font-semibold text-textPrimary dark:text-darkTextSecondary'>
                static site generation
              </span>{' '}
              (SSG)
            </p>
          </div>
          <div className='flex gap-2 items-center md:justify-center'>
            <span className='text-[#097969]'>
              <BsCheckCircle />
            </span>
            <p>Blazing fast</p>
          </div>
        </div>

        <div>
          {postsData.map((post, index) => {
            return <BlogCard key={index} post={post} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
