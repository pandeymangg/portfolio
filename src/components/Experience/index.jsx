import React from "react";
import DatePill from "../Blog/DatePill";

const Experience = () => {
  return (
    <section
      id="experience"
      className="home w-full mx-auto flex flex-col px-8 bg-white mb-8"
    >
      <div className="max-w-2xl flex flex-col mx-auto items-start">
        <div className="mb-8">
          <h1 className="text-5xl font-bold tracking-tight text-black">
            Experience
          </h1>
        </div>

        <div>
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-3xl font-semibold text-gray-900">Quinn</h2>
            <DatePill date={"May 2021 - August 2021"} />
          </div>
          <div>
            <ul className="flex flex-col gap-2 text-base text-gray-600">
              <li>Converted designs to responsive web pages.</li>
              <li>
                Learnt tailwindcss and used it to make pixel perfect UI
                components, writing robust, ready to go to production level
                code.
              </li>
              <li>
                Built a blog for the web app. Learnt a lot about Content
                Management Systems (CMS) and static site generation using
                next.js. Used notion as a CMS for the blog.
              </li>
              <li>
                Learnt next.js and implemented ways to make the web app more
                performant, including optimizing images, lazy loading data,
                preloading site resources and so on.
              </li>
              <li>
                Learnt react query and implemented hooks for data fetching and
                caching.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
