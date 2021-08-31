import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects pt-20 w-full mx-auto flex flex-col px-8 pb-8"
    >
      <div className="max-w-2xl flex flex-col mx-auto items-start gap-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Projects
          </h1>
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-lg md:text-2xl font-bold text-black dark:text-white">
              <a
                href="https://simple-docs.herokuapp.com/"
                className="project-link hover:text-gray-600 dark:hover:text-gray-200"
              >
                Simple Docs
              </a>
            </h2>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-100 mb-2">
              A web app for managing documents. Feature rich and simple. Enables
              users to create, save and update documents. Has a rich text editor
              complete with multiple styles. Authentication has been done using
              jwt tokens and Authorization is also set up for keeping users'
              documents safe.
            </p>
            <p className="text-gray-600 dark:text-gray-100 mb-2">
              A lot of focus has been given to collaboration between users. Live
              notifications along with notification badges have been implemented
              using socket.io
            </p>

            <p className="mb-4 text-gray-900 dark:text-gray-50">
              Skills Learned:{" "}
              <span className="font-semibold">
                React Context API, Slatejs, Authentication, Authorization,
                Socket.io
              </span>
            </p>

            <div className="flex">
              <div className="mr-2 rounded-full px-3 py-1 bg-primary">
                <span className="text-xs md:text-sm text-black font-semibold tracking-normal">
                  View Project
                </span>
              </div>
              <div className="mr-2 rounded-full px-3 py-1 bg-primary">
                <span className="text-xs md:text-sm text-black font-semibold tracking-normal">
                  GitHub
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-lg md:text-2xl font-bold text-black dark:text-white">
              YouTube Playlist Length
            </h2>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-100 mb-2">
              A web app for calculating the total runtime of any YouTube
              playlist. Especially useful for students who start following a
              tutorial series and are curious about how much time will they have
              to devote to it.
            </p>

            <p className="mb-4 text-gray-900 dark:text-gray-50">
              Skills Learned:{" "}
              <span className="font-semibold">React Router, Google APIs</span>
            </p>

            <div className="flex">
              <div className="mr-2 rounded-full px-3 py-1 bg-primary">
                <span className="text-xs md:text-sm text-black font-semibold tracking-normal">
                  View Project
                </span>
              </div>
              <div className="mr-2 rounded-full px-3 py-1 bg-primary">
                <span className="text-xs md:text-sm text-black font-semibold tracking-normal">
                  GitHub
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-lg md:text-2xl font-bold text-black dark:text-white">
              ImageShrinker
            </h2>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-100 mb-2">
              A desktop app for resizing images!. Reduces image size without
              much quality loss and hassle. Useful for places like online forms
              where users have to submit a smaller sized image. Has a nice dark
              theme as well!
            </p>

            <p className="mb-4 text-gray-900 dark:text-gray-50">
              Skills Learned: <span className="font-semibold">Electron.js</span>
            </p>

            <div className="flex">
              <div className="mr-2 rounded-full px-3 py-1 bg-primary">
                <span className="text-xs md:text-sm text-black font-semibold tracking-normal">
                  GitHub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
