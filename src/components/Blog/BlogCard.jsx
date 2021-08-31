import React from "react";
import DatePill from "./DatePill";
import Link from "next/link";

const BlogCard = ({ post }) => {
  const { slug } = post;
  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <div className="w-full h-auto flex flex-col items-start mb-8 cursor-pointer">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center w-full mb-2">
          <h4 className="text-base md:text-xl text-gray-900 dark:text-gray-100 font-medium">
            {post.data.title}
          </h4>
          <div className="w-24 md:w-auto">
            <DatePill date={post.data.date} />
          </div>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-200">
            {post.data.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
