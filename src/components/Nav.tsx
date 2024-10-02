import { CalendarIcon, ClockIcon } from "lucide-react";
import { cn } from "../lib/cn";
import { TabItem } from "../types";
import { useEffect, useState } from "react";

const navItems: Array<TabItem> = [
  { id: "aboutMe", label: "About Me" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "links", label: "Links" },
];

interface NavProps {
  onItemChange: (item: TabItem) => void;
  componentStack: Array<string>;
}

export const Nav = ({ componentStack, onItemChange }: NavProps) => {
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

      <nav className="border-borderPrimary border-2 rounded-full shadow-xl px-4 py-1 bg-bgSecondary">
        <div>
          {navItems.map((item) => (
            <button
              className={`px-2 rounded-full`}
              onClick={() => {
                onItemChange(item);
              }}
              key={item.id}
            >
              <span
                className={cn(
                  "relative text-sm z-10 row-start-1 col-start-1 px-3 py-1 rounded-full text-textPrimary",
                  componentStack.includes(item.id)
                    ? "bg-bgPrimary"
                    : "bg-bgSecondary"
                )}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <nav className="border-borderPrimary border-2 rounded-full shadow-xl px-4 py-1 bg-bgSecondary">
        <h1>
          <span className="text-sm text-textRose font-medium">Lorem ipsum</span>
        </h1>
      </nav>
    </nav>
  );
};
