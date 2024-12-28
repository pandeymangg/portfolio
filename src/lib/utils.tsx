import { Home } from "../components/windows/Home";
import { Links } from "../components/windows/Links";
import { Projects } from "../components/windows/Projects";
import { Work } from "../components/windows/Work";

export const getComponentById = (id: string) => {
  switch (id) {
    case "about-me":
      return <Home />;
    case "projects":
      return <Projects />;
    case "work":
      return <Work />;
    case "links":
      return <Links />;
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
    case "links":
      return "Links";
    default:
      return "About Me";
  }
};
