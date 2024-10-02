import React, { useState } from "react";
import { Root } from "../types";
import { cn } from "../lib/cn";
import { XIcon } from "lucide-react";

interface DwindleProps {
  config: Root;
  width: number;
  height: number;
  onDelete: (id: string) => void;
  gap?: number;
}

const Dwindle: React.FC<DwindleProps> = ({
  config,
  width,
  height,
  onDelete,
  gap = 4,
}) => {
  const [activeElementId, setActiveElementId] = useState("");

  const ratio = width / height;
  const flexDirection = ratio > 1 ? "row" : "col";

  return (
    <div
      className={cn("flex", `flex-${flexDirection}`)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        gap: `${gap}px`,
      }}
    >
      {config.leaves.map((leaf) => {
        if (leaf.type === "child") {
          return (
            <div
              className={`border-2 border-borderPrimary rounded-xl overflow-hidden ${
                activeElementId === leaf.id && "border-textRose"
              }`}
              style={{
                position: "relative",
                width: `${width}px`,
                height: `${height}px`,
              }}
              onMouseEnter={() => setActiveElementId(leaf.id)}
              onMouseLeave={() => setActiveElementId("")}
            >
              <div className="h-6 px-4 py-2 flex items-center">
                <button
                  onClick={() => {
                    onDelete(leaf.id);
                  }}
                  className="h-3 w-3 bg-red-500 rounded-full cursor-pointer flex items-center justify-center text-red-500 hover:text-white"
                >
                  <XIcon className="h-2 w-2" />
                </button>
              </div>

              {leaf.component}
              {/* <span
                style={{
                  position: "absolute",
                  right: 4,
                  top: 4,
                  cursor: "pointer",
                  fontSize: 18,
                }}
                onClick={() => onDelete(leaf.id)}
              >
                close
              </span> */}
            </div>
          );
        } else {
          return (
            <Dwindle
              config={leaf}
              width={
                ratio > 1 ? (leaf.leaves.length > 1 ? width / 2 : width) : width
              }
              height={ratio > 1 ? height : height / 2}
              onDelete={onDelete}
              gap={gap}
            />
          );
        }
      })}
    </div>
  );
};

export default Dwindle;
