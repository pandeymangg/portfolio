import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { Work } from "../components/Work";

export const getComponentById = (id: string) => {
  switch (id) {
    case "about-me":
      return <Home />;
    case "projects":
      return <Projects />;
    case "work":
      return <Work />;
    default:
      return <Home />;
  }
};

export const getComponentLabelById = (id: string) => {
  switch (id) {
    case "about-me":
      return "About Me";
    case "projects":
      return "Projects";
    case "work":
      return "Work";
    default:
      return "About Me";
  }
};
