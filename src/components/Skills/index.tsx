import Link from "next/link";
import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills pt-20 w-full mx-auto flex flex-col px-8"
    >
      <div className="max-w-2xl flex flex-col mx-auto items-start">
        <div className="mb-8">
          <Link href="/#skills">
            <a>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
                Skills
              </h1>
            </a>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-base md:text-lg text-black dark:text-white font-bold mr-4">
              Programming Languages:
            </span>
            <span className="text-sm md:text-base text-gray-600 dark:text-gray-100">
              JavaScript / TypeScript, Python, C++, Java, C
            </span>
          </div>
          <div>
            <span className="text-base md:text-lg text-black dark:text-white font-bold mr-4">
              Web Technologies:
            </span>
            <span className="text-sm md:text-base text-gray-600 dark:text-gray-100">
              HTML, CSS, SASS, JavaScript, Node.js, Express.js, React.js,
              Next.js, Electon.js, REST, Django, Flask, GraphQL
            </span>
          </div>
          <div>
            <span className="text-base md:text-lg text-black dark:text-white font-bold mr-4">
              Databases and other tools:
            </span>
            <span className="text-sm md:text-base text-gray-600 dark:text-gray-100">
              MongoDb, MYSQL, PostgreSQL, Git, Github, Shopify app development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
