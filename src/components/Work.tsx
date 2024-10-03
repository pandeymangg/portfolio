export const Work = () => {
  return (
    <div className="px-4 pt-4 h-full max-h-full overflow-auto">
      <div className="flex items-center">
        <h2 className="text-textPrimary text-2xl font-bold">
          Work Experience 🚀
        </h2>
      </div>

      <div className="mt-4">
        <h3 className="text-textPrimary text-xl font-semibold">
          Formbricks | Full Stack Dev
        </h3>
        <p className="text-textSecondary text-sm">
          Remote | August 2023 - Present
        </p>
        <p className="text-textPrimary mt-2">
          Working with Formbricks with the aim to build the best open source
          experience management solution out there 💪
        </p>
        <ul className="list-disc ml-6 mt-2 text-textPrimary">
          <li>
            Implemented the feature for targeting and displaying surveys to
            specific users, making surveys more personal and well timed!
          </li>
          <li>
            Implemented bulletproof validation for the survey builder, ensuring
            that no surveys are created with invalid configurations.
          </li>
          <li>
            Worked on the feature for exporting survey data to CSV, making it
            easy for users to analyze and visualize their data.
          </li>
          <li>
            Implemented the entire storage system for Formbricks, ensuring users
            and admins can easily upload files and take files in responses.
          </li>
        </ul>
      </div>

      {/* Tealfeed Internship */}
      <div className="mt-6">
        <h3 className="text-textPrimary text-xl font-semibold">
          Tealfeed | Software Engineering Intern
        </h3>
        <p className="text-textSecondary text-sm">
          Gurgaon, India | July 2022 - Present
        </p>
        <ul className="list-disc ml-6 mt-2 text-textPrimary">
          <li>Implemented type checking on the front-end using TypeScript.</li>
          <li>
            Refactored the code-base and integrated react-query for data
            management, including handling invalidating queries and optimistic
            updates.
          </li>
          <li>
            Worked on Tealfeed’s Creator Program, implemented the front-end with
            Next.js and TypeScript.
          </li>
        </ul>
      </div>

      {/* Trell Internship */}
      <div className="mt-6">
        <h3 className="text-textPrimary text-xl font-semibold">
          Trell | Software Engineering Intern
        </h3>
        <p className="text-textSecondary text-sm">
          Remote | February 2022 – June 2022
        </p>
        <ul className="list-disc ml-6 mt-2 text-textPrimary">
          <li>Implemented Storybook for React components with TypeScript.</li>
          <li>
            Worked with the post-order team to migrate cart and payments pages
            from CRA to Next.js.
          </li>
          <li>
            Used redux-toolkit for state management and data fetching throughout
            the project.
          </li>
        </ul>
      </div>

      {/* Quinn Internship */}
      <div className="mt-6">
        <h3 className="text-textPrimary text-xl font-semibold">
          Quinn | Software Engineering Intern
        </h3>
        <p className="text-textSecondary text-sm">
          Remote | May 2021 – November 2021
        </p>
        <ul className="list-disc ml-6 mt-2 text-textPrimary">
          <li>
            Converted designs to UI components with Next.js and Tailwind CSS.
          </li>
          <li>
            Built a blog for the web app and learned about CMS and static site
            generation.
          </li>
          <li>
            Used react-query to implement hooks for data fetching and caching.
          </li>
          <li>
            Developed a React package for a Shopify video-based product slider
            for e-commerce stores.
          </li>
        </ul>
      </div>
    </div>
  );
};
