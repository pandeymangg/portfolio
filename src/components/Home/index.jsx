import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const Home = ({ postsData }) => {
  return (
    <section className="home pt-32 flex flex-col justify-center px-8 bg-white">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-black text-center">
            Blog
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center justify-center">
            <span className="text-[#097969]">
              <BsCheckCircle />
            </span>
            <p>
              Built with <span className="font-semibold">next.js</span>,{" "}
              <span className="font-semibold">tailwindcss</span>,{" "}
              <span className="font-semibold">markdown</span>
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <span className="text-[#097969]">
              <BsCheckCircle />
            </span>
            <p>
              Static site generated with next.js{" "}
              <span className="font-semibold">static site generation</span>{" "}
              (SSG)
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <span className="text-[#097969]">
              <BsCheckCircle />
            </span>
            <p>Blazing fast</p>
          </div>
        </div>

        {/* <div>
          {postsData.map((post, index) => {
            return (
              <div key={index}>
                {post.data.title}
                {post.data.description}
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Home;
