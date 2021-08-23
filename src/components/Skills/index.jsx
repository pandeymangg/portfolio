import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills pt-20 w-full mx-auto flex flex-col px-8 bg-white"
    >
      <div className="max-w-2xl flex flex-col mx-auto items-start">
        <div className="mb-8">
          <h1 className="text-5xl font-bold tracking-tight text-black">
            Skills
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-lg text-black font-bold mr-4">
              Programming Languages:
            </span>
            <span className="text-base text-gray-600">
              JavaScript, Python, C++, Java, C
            </span>
          </div>
          <div>
            <span className="text-lg text-black font-bold mr-4">
              Web Technologies:
            </span>
            <span className="text-base text-gray-600">
              HTML, CSS, SASS, JavaScript, Node.js, Express.js, React.js,
              Next.js, Electon.js, REST, Django, Flask
            </span>
          </div>
          <div>
            <span className="text-lg text-black font-bold mr-4">
              Databases and other tools:
            </span>
            <span className="text-base text-gray-600">
              MongoDb, MYSQL, PostgreSQL, Git, Github
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
