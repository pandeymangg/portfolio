import React, { useState } from "react";
import { Root } from "../types";

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
  gap,
}) => {
  const [activeElementId, setActiveElementId] = useState("");

  const ratio = width / height;
  const flexDirection = ratio > 1 ? "row" : "column";
  return (
    <div
      className="root"
      style={{
        display: "flex",
        flexDirection,
        width: `${width}px`,
        height: `${height}px`,
        gap,
        color: "white",
      }}
    >
      {config.leaves.map((leaf) => {
        if (leaf.type === "child") {
          return (
            <div
              className={`border-2 border-borderPrimary rounded-md p-2 ${
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
              {leaf.component}
              <span
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
              </span>
            </div>
          );
        } else {
          return (
            <div
              className="root"
              style={{
                display: "flex",
                flexDirection,
                width: `${width}px`,
                height: `${height}px`,
                gap,
              }}
            >
              <Dwindle
                config={leaf}
                width={
                  ratio > 1
                    ? leaf.leaves.length > 1
                      ? width / 2
                      : width
                    : width
                }
                height={ratio > 1 ? height : height / 2}
                onDelete={onDelete}
                gap={gap}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Dwindle;
