import React from "react";
import { MDXRemote } from "next-mdx-remote";
import DatePill from "../DatePill";

const BlogPost = ({ data, source }) => {
  return (
    <section className="blog-post pt-20 h-screen w-full mx-auto  px-8 pb-8">
      <div className="max-w-2xl flex flex-col mx-auto items-start">
        <div className="mb-8 flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white mb-4">
            {data.title}
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                <img src="/assets/images/photo.jpg" className="w-full h-full" />
              </div>

              <div>
                <span className="text-gray-700 dark:text-gray-200 text-sm">
                  Anshuman Pandey
                </span>
              </div>
            </div>

            <DatePill date={data.date} />
          </div>
        </div>
        <div className="prose dark:prose-dark">
          <MDXRemote {...source} />
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
