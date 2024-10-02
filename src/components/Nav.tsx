import { cn } from "../lib/cn";
import { TabItem } from "../types";

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
  return (
    <nav className="border-borderPrimary border-2 rounded-md shadow-xl px-4 py-1 bg-bgSecondary flex justify-between items-center">
      <h1>
        <span className="text-lg text-textRose font-medium">👋</span>
      </h1>

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
                "relative z-10 row-start-1 col-start-1 px-3 py-1 rounded-md text-textPrimary",
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
  );
};
