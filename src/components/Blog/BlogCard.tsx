import React from 'react';
import DatePill from '../common/DatePill';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface IBlogCardProps {
  post: {
    data: {
      [key: string]: any;
    };
    content: string;
    slug: string;
  };
}

const BlogCard = ({ post }: IBlogCardProps) => {
  const { slug } = post;
  const { theme } = useTheme();

  return (
    <Link href='/blog/[slug]' as={`/blog/${slug}`}>
      <div className='blog-card-container w-full h-auto flex flex-col items-start mb-8 p-4 rounded-sm border-[#333] transition-all duration-300 cursor-pointer'>
        <style jsx>{`
          .blog-card-container:hover {
            box-shadow: ${theme === 'dark' ? '#eee' : '#333'} 4px 4px 1px;
          }
        `}</style>
        <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center w-full mb-2'>
          <h4 className='text-base md:text-xl text-gray-900 dark:text-gray-100 font-medium'>
            {post.data.title}
          </h4>
          <div className='w-auto self-start md:self-center'>
            <DatePill date={post.data.date} />
          </div>
        </div>
        <div>
          <p className='text-gray-600 dark:text-gray-200'>
            {post.data.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
