import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects pt-20 w-full mx-auto flex flex-col px-8 bg-white"
    >
      <div className="max-w-2xl flex flex-col mx-auto items-start gap-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-black">
            Projects
          </h1>
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-black">Simple Docs</h2>
          </div>
          <div>
            <p className="text-gray-600 mb-2">
              A web app for managing documents. Feature rich and simple. Enables
              users to create, save and update documents. Has a rich text editor
              complete with multiple styles. Authentication has been done using
              jwt tokens and Authorization is also set up for keeping users'
              documents safe.
            </p>
            <p className="text-gray-600 mb-2">
              A lot of focus has been given to collaboration between users. Live
              notifications along with notification badges have been implemented
              using socket.io
            </p>

            <p>
              Skills Learned:{" "}
              <span className="font-semibold">
                React Context API, Slatejs, Authentication, Authorization,
                Socket.io
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-black">
              YouTube Playlist Length
            </h2>
          </div>
          <div>
            <p className="text-gray-600 mb-2">
              A web app for calculating the total runtime of any YouTube
              playlist. Especially useful for students who start following a
              tutorial series and are curious about how much time will they have
              to devote to it.
            </p>

            <p>
              Skills Learned:{" "}
              <span className="font-semibold">React Router, Google APIs</span>
            </p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-black">ImageShrinker</h2>
          </div>
          <div>
            <p className="text-gray-600 mb-2">
              A desktop app for resizing images!. Reduces image size without
              much quality loss and hassle. Useful for places like online forms
              where users have to submit a smaller sized image. Has a nice dark
              theme as well!
            </p>

            <p>
              Skills Learned: <span className="font-semibold">Electron.js</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
