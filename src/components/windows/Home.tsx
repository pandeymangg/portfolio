export const Home = () => {
  return (
    <div className="md:px-4 md:py-4 flex flex-col gap-4 h-full max-h-full overflow-auto">
      <h2 className="text-textPrimary text-2xl font-bold hidden md:block">
        About Me! 👋
      </h2>

      <div className="flex flex-col gap-4 md:mb-4">
        <p className="text-textPrimary text-base">
          Hey there! I’m a software engineer with a passion for building
          intuitive user experiences and seamless web applications. Over the
          years, I've enjoyed diving into a wide range of technologies—from
          JavaScript to C++, from frontend UI frameworks like React.js to
          backend solutions with Node.js. My experience spans startups,
          internships, and a commitment to open source, where I've been
          contributing to an open-source experience management solution—an
          alternative to Typeform.
        </p>
        <p className="text-textPrimary text-base">
          I love linux, been using it since 2016 and I actually went all the way
          from ubuntu to arch. I'm currently using arch btw. With that came my
          love for tiling window managers, I've tried a couple of them like i3,
          awesome, hyprland, etc but for me qtile is the GOAT.
        </p>
        <p className="text-textPrimary text-base">
          This portfolio itself is a reflection of my love for efficient,
          organized design. 🖥️ Inspired by tiling window managers, it's built to
          be minimalistic, modular, and uniquely interactive—just like how I
          approach development: organized, efficient, and a little bit playful.
          ✨
        </p>
        <p className="text-textPrimary texte-base">
          Feel free to explore and open new "windows" to see my work, projects,
          and interests! 🚀
        </p>
      </div>
    </div>
  );
};
