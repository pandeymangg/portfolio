import Link from "next/link";
import React from "react";
import Button from "./Button";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects pt-20 w-full mx-auto flex flex-col px-8 pb-8"
    >
      <div className="max-w-2xl flex flex-col mx-auto items-start gap-8">
        <div>
          <Link href="/#projects">
            <a>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
                Projects
              </h1>
            </a>
          </Link>
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-lg md:text-2xl font-bold text-black dark:text-white">
              Simple Docs
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
              <Button
                text="View Project"
                link="https://simple-docs.herokuapp.com/"
              />
              <Button
                text="GitHub"
                link="https://github.com/anshuman9999/simple-docs"
              />
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
              <Button
                text="View Project"
                link="https://yt-playlist-duration.herokuapp.com/"
              />
              <Button
                text="GitHub"
                link="https://github.com/anshuman9999/youtube-playlist-length"
              />
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
              <Button
                text="GitHub"
                link="https://github.com/anshuman9999/electron-image-shrink"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
