import {
  BriefcaseBusinessIcon,
  CalendarIcon,
  ClockIcon,
  FlaskConicalIcon,
  LinkedinIcon,
} from "lucide-react";
import { cn } from "../lib/cn";
import { TabItem } from "../types";
import { useEffect, useState } from "react";
import { GithubIcon } from "./icons/GithubIcon";
import { XIcon } from "./icons/XIcon";

const navItems: Array<TabItem> = [
  { id: "aboutMe", label: "👋 About Me" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
];

interface NavProps {
  onItemChange: (item: TabItem) => void;
  componentStack: Array<string>;
  onReArrange?: () => void;
}

export const Nav = ({
  componentStack,
  onItemChange,
}: // onReArrange,
NavProps) => {
  // get the date like Wed, 02 Oct 2024
  const date = new Date().toDateString().split(" ").join(", ");

  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const [currentTime, setCurrentTime] = useState(time);

  // listen to the time change
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setCurrentTime(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex justify-between items-center">
      <nav className="border-borderPrimary border-2 rounded-full shadow-xl px-4 py-1 bg-bgSecondary">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <CalendarIcon className="text-iris w-4 h-4" />
            <span className="text-sm text-textRose font-medium">{date}</span>
          </div>

          <div className="flex items-center gap-2">
            <ClockIcon className="text-iris w-4 h-4" />
            <span className="text-sm text-textRose font-medium">
              {currentTime}
            </span>
          </div>
        </div>
      </nav>

      <nav className="border-borderPrimary border-2 rounded-full shadow-xl px-4 py-1 bg-bgSecondary flex items-center gap-4">
        <a
          target="_blank"
          href="https://github.com/pandeymangg"
          rel="noopener noreferrer"
        >
          <GithubIcon className="text-textPrimary" />
        </a>

        <a
          target="_blank"
          href="https://x.com/pandeymangg"
          rel="noopener noreferrer"
        >
          <XIcon className="h-4 w-4 fill-textPrimary" />
        </a>

        <a
          target="_blank"
          href="https://linkedin.com/in/pandeyman"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="text-textPrimary h-4 w-4" />
        </a>
      </nav>

      <nav className="border-borderPrimary border-2 rounded-full shadow-xl px-4 py-1 bg-bgSecondary">
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <button
              className={cn(
                "px-3 py-1 rounded-full flex items-center gap-2 text-sm",
                componentStack.includes(item.id)
                  ? "bg-bgPrimary"
                  : "bg-bgSecondary"
              )}
              onClick={() => {
                onItemChange(item);
              }}
              key={item.id}
            >
              {item.id === "work" && (
                <BriefcaseBusinessIcon className="text-textPrimary w-4 h-4" />
              )}

              {item.id === "projects" && (
                <FlaskConicalIcon className="text-textPrimary w-4 h-4" />
              )}

              <span
                className={cn(
                  "relative text-sm z-10 row-start-1 col-start-1 rounded-full text-textPrimary"
                )}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </nav>
  );
};
