import React from "react";
import Quinn from "./Quinn";
import Trell from "./Trell";

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

        <div className="flex flex-col gap-8">
          <Quinn />
          <Trell />
        </div>
      </div>
    </section>
  );
};

export default Experience;
