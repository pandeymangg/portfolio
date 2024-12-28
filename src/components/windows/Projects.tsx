export const Projects = () => {
  return (
    <div className="md:px-4 md:pt-4 h-full max-h-full overflow-auto">
      <div className="flex items-center mb-4">
        <h2 className="text-textPrimary text-2xl font-bold">Projects 🛠️</h2>
      </div>

      <div className="mt-4">
        <h3 className="text-textPrimary text-xl font-semibold">
          <a
            href="https://formbricks.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline hover:text-pine"
          >
            Formbricks
          </a>
        </h3>
        <p className="text-textSecondary text-sm">
          Next.js, TypeScript, TailwindCSS, Prisma, PostgreSQL
        </p>
        <p className="text-textPrimary mt-2">
          Building an open source experience management solution. Check it out
          on GitHub and give the repo a star! 🌟
        </p>
      </div>

      <div className="my-4">
        <h3 className="text-textPrimary text-xl font-semibold">
          <a
            href="https://yt-pl-len.vercel.app/"
            className="hover:underline hover:text-pine"
            target="_blank"
            rel="noreferrer"
          >
            YouTube Playlist Length
          </a>
        </h3>
        <p className="text-textSecondary text-sm">
          Node.js, Express.js, React.js, YouTube API V3, MaterializeCSS
        </p>
        <ul className="list-disc ml-6 mt-2 pb-4 text-textPrimary">
          <li>
            A web app that calculates the total run time of any YouTube
            playlist.
          </li>
          <li>
            Provides useful insights for students following tutorial series or
            courses on YouTube.
          </li>
          <li>
            Displays the total run time of a playlist at increased speeds (e.g.,
            1.5x, 2x).
          </li>
        </ul>
      </div>
    </div>
  );
};
