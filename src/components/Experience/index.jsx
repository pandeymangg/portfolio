import React from "react";
import DatePill from "../Blog/DatePill";
import { BsDot } from "react-icons/bs";

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-20 experience w-full mx-auto flex flex-col px-8"
    >
      <div className="max-w-2xl flex flex-col mx-auto items-start">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Experience
          </h1>
        </div>

        <div>
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-50">
              Quinn
            </h2>
            <DatePill date={"May 2021 - August 2021"} />
          </div>
          <div>
            <ul className="flex flex-col gap-2 text-sm md:text-base text-gray-600 dark:text-gray-100">
              <div className="flex gap-2 items-center">
                <div className="text-black dark:text-white">
                  <BsDot size={"2rem"} />
                </div>
                <li>Converted designs to responsive web pages.</li>
              </div>

              <div className="flex gap-2 items-center">
                <div className="text-black dark:text-white">
                  <BsDot size={"2rem"} />
                </div>
                <li>
                  Learnt <span className="font-semibold">tailwindcss</span> and
                  used it to make pixel perfect UI components,{" "}
                  <span className="font-semibold">
                    writing robust, ready to go to production level code
                  </span>
                  .
                </li>
              </div>

              <div className="flex gap-2 items-center">
                <div className="text-black dark:text-white">
                  <BsDot size={"2rem"} />
                </div>
                <li>
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
                </li>
              </div>

              <div className="flex gap-2 items-center">
                <div className="text-black dark:text-white">
                  <BsDot size={"2rem"} />
                </div>
                <li>
                  Learnt next.js and implemented ways to make the web app more
                  performant,{" "}
                  <span className="font-semibold">
                    including optimizing images, lazy loading data, preloading
                    site resources
                  </span>{" "}
                  and so on.
                </li>
              </div>

              <div className="flex gap-2 items-center">
                <div className="text-black dark:text-white">
                  <BsDot size={"2rem"} />
                </div>
                <li>
                  Learnt <span className="font-semibold">react query</span> and
                  implemented hooks for data fetching and caching.
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
