import React from "react";
import DatePill from "../Blog/DatePill";
import { BsDot } from "react-icons/bs";

const Quinn = () => {
  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-50">
          Quinn
        </h2>
        <DatePill date={"May 2021 - November 2021"} />
      </div>
      <div className="experience-pointers">
        <ul className="flex flex-col gap-2 text-sm md:text-base text-gray-600 dark:text-gray-100">
          <li className="flex gap-2 items-center">
            <div className="text-black dark:text-white">
              <BsDot size={"2rem"} />
            </div>
            <p>Converted designs to responsive web pages.</p>
          </li>

          <li className="flex gap-2 items-center">
            <div className="text-black dark:text-white">
              <BsDot size={"2rem"} />
            </div>
            <p>
              Learnt <span className="font-semibold">tailwindcss</span> and used
              it to make pixel perfect UI components,{" "}
              <span className="font-semibold">
                writing robust, ready to go to production level code
              </span>
              .
            </p>
          </li>

          <li className="flex gap-2 items-center">
            <div className="text-black dark:text-white">
              <BsDot size={"2rem"} />
            </div>
            <p>
              <span className="font-semibold">
                Built a blog for the web app
              </span>
              . Learnt a lot about{" "}
              <span className="font-semibold">
                Content Management Systems (CMS)
              </span>{" "}
              and{" "}
              <span className="font-semibold">
                static site generation (SSG) using next.js
              </span>
              . Used notion as a CMS for the blog.
            </p>
          </li>

          <li className="flex gap-2 items-center">
            <div className="text-black dark:text-white">
              <BsDot size={"2rem"} />
            </div>
            <p>
              Learnt next.js and implemented ways to make the web app more
              performant,{" "}
              <span className="font-semibold">
                including optimizing images, lazy loading data, preloading site
                resources
              </span>{" "}
              and so on.
            </p>
          </li>

          <li className="flex gap-2 items-center">
            <div className="text-black dark:text-white">
              <BsDot size={"2rem"} />
            </div>
            <p>
              Learnt <span className="font-semibold">react query</span> and
              implemented hooks for data fetching and caching.
            </p>
          </li>

          <li className="flex gap-2 items-center">
            <div className="text-black dark:text-white">
              <BsDot size={"2rem"} />
            </div>
            <p>
              Learnt <span className="font-semibold">Shopify</span> app and
              theme development and worked on making a shopify plugin that lets
              brands display their best products' videos in a tik-tok like
              inteface
            </p>
          </li>

          <li className="flex gap-2 items-center">
            <div className="text-black dark:text-white">
              <BsDot size={"2rem"} />
            </div>
            <p>
              Worked on handling videos on a web app. Did a lot performance
              optimizations by techniques like lazy-loading, etc.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Quinn;
