import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import BlogCard from "./BlogCard";

const Blog = ({ postsData }) => {
  return (
    <section className="blog pt-20 h-screen flex flex-col px-8">
      <div className="max-w-2xl flex flex-col mx-auto gap-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white text-center">
            Blog
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center md:justify-center">
            <span className="text-[#097969]">
              <BsCheckCircle />
            </span>
            <p className="text-gray-900 dark:text-gray-100">
              Built with <span className="font-semibold">next.js</span>,{" "}
              <span className="font-semibold">tailwindcss</span>,{" "}
              <span className="font-semibold">markdown</span>
            </p>
          </div>
          <div className="flex gap-2 items-center md:justify-center">
            <span className="text-[#097969]">
              <BsCheckCircle />
            </span>
            <p className="text-gray-900 dark:text-gray-100">
              Static site generated with next.js{" "}
              <span className="font-semibold">static site generation</span>{" "}
              (SSG)
            </p>
          </div>
          <div className="flex gap-2 items-center md:justify-center">
            <span className="text-[#097969]">
              <BsCheckCircle />
            </span>
            <p className="text-gray-900 dark:text-gray-100">Blazing fast</p>
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
