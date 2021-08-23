import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Home = () => {
  return (
    <section id="home" className="home pt-20 flex flex-col px-8 bg-white">
      <div className="max-w-2xl flex flex-col mx-auto">
        <div className="img-container flex items-center justify-center w-full">
          <div className="w-48 h-48 rounded-full shadow-xl border-4 border-primary mb-10 overflow-hidden">
            <img src="/assets/images/photo.jpg" className="w-full h-full"></img>
          </div>
        </div>
        <div className="mb-6">
          <h1 className="text-5xl font-bold tracking-tight text-black">
            Hey, I'm Anshuman Pandey
          </h1>
        </div>

        <div className="home-intro">
          <p className="text-gray-600 text-base mb-4">
            I'm a{" "}
            <span className="font-semibold">full stack web developer</span>, I
            love working with web technologies and building web apps. I'm
            passionate about learning new skills that help me become a better
            developer.
          </p>

          <p className="text-gray-600 text-base mb-8">
            I have worked with{" "}
            <span className="font-semibold">HTML, CSS and JavaScript </span> and
            have experience with various JavaScript frameworks like{" "}
            <span className="font-semibold">
              React.js, Next.js Node.js and Electron.js
            </span>
            . I have experience in building{" "}
            <span className="font-semibold">REST APIs with Express</span>. I use
            these tools to build user-friendly web apps that function well.
          </p>

          <div className="home-intro-links">
            <div className="mb-4">
              <p className="font-semibold text-gray-600 text-lg">
                Connect with me:{" "}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="rounded-lg w-20 h-14 border-4 border-black hover:bg-primary hover:border-primary cursor-pointer flex justify-center items-center">
                <AiFillGithub size={"2rem"} />
              </div>
              <div className="rounded-lg w-20 h-14 border-4 border-black hover:bg-primary hover:border-primary cursor-pointer flex justify-center items-center">
                <AiFillLinkedin size={"2rem"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
