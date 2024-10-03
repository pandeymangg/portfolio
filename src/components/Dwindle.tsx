import React, { useEffect, useMemo, useState } from "react";
import { Child, Root } from "../types";
import { cn } from "../lib/cn";
import { EllipsisVerticalIcon, XIcon } from "lucide-react";
import { getComponentLabelById } from "../lib/utils";

interface LeafProps {
  leaf: Child;
  activeElementId: string;
  setActiveElementId: React.Dispatch<React.SetStateAction<string>>;
  width: number;
  height: number;
  onDelete: (id: string) => void;
  onReArrange?: (source: string, destination: string) => void;
  componentStack?: Array<string>;
}

const Leaf = ({
  activeElementId,
  height: heightProp,
  leaf,
  onDelete,
  setActiveElementId,
  width: widthProp,
  componentStack,
  onReArrange,
}: LeafProps) => {
  const [contextMenuOpened, setContextMenuOpened] = useState(false);
  const leafRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(widthProp);
  const [height, setHeight] = useState(heightProp);

  useEffect(() => {
    setWidth(widthProp);
    setHeight(heightProp);
  }, [heightProp, widthProp]);

  return (
    <div
      className={cn(
        "border-2 border-borderPrimary rounded-xl overflow-hidden transition-colors duration-300",
        activeElementId === leaf.id && "border-orange"
      )}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
      }}
      onMouseEnter={() => setActiveElementId(leaf.id)}
      onMouseLeave={() => setActiveElementId("")}
      ref={leafRef}
    >
      <div className="h-6 px-4 py-2 flex items-center gap-2 bg-bgSecondary">
        <button
          onClick={() => {
            onDelete(leaf.id);
          }}
          className="h-3 w-3 bg-red-500 rounded-full cursor-pointer flex items-center justify-center text-red-500 hover:text-white transition-colors duration-200"
        >
          <XIcon className="h-2 w-2" />
        </button>

        <div className="relative">
          <button
            onClick={() => {
              setContextMenuOpened((prev) => !prev);
            }}
          >
            <EllipsisVerticalIcon className="h-3 w-3 text-textPrimary" />
          </button>

          {contextMenuOpened && (
            <div
              className={cn(
                "absolute top-4 left-0 bottom-12 min-w-max min-h-max bg-bgTertiary border rounded-lg border-borderPrimary"
              )}
            >
              <p className="text-textPrimary text-xs px-3 py-2 text-left">
                Replace with
              </p>

              {componentStack
                ?.filter((id) => id !== leaf.id)
                ?.map((item) => {
                  return (
                    <button
                      onClick={() => {
                        if (onReArrange) onReArrange(leaf.id, item);
                      }}
                      className="block py-2 px-3 w-full bg-bgTertiary hover:bg-bgSecondary cursor-pointer text-left"
                    >
                      <span className="text-sm text-textPrimary">
                        {getComponentLabelById(item)}
                      </span>
                    </button>
                  );
                })}
            </div>
          )}
        </div>

        {/* <button
          className="text-textPrimary"
          onClick={() => setWidth((prev) => prev + 10)}
        >
          +
        </button> */}
      </div>
      {leaf.component}
    </div>
  );
};

interface DwindleProps {
  config: Root;
  width: number;
  height: number;
  onDelete: (id: string) => void;
  gap?: number;
  componentStack?: Array<string>;
  onReArrange?: (source: string, destination: string) => void;
  layoutId?: string;
}

const Dwindle: React.FC<DwindleProps> = ({
  config,
  width,
  height,
  onDelete,
  gap = 4,
  componentStack,
  onReArrange,
  layoutId,
}) => {
  const [activeElementId, setActiveElementId] = useState("");
  const ratio = width / height;
  const flexDirection = ratio > 1 ? "row" : "col";

  const leafWidth = useMemo(() => {
    if (config.leaves.length > 1) {
      if (ratio > 1) {
        return width / 2;
      }

      return width;
    }

    return width;
  }, [config.leaves.length, ratio, width]);

  const leafHeight = useMemo(() => {
    if (config.leaves.length > 1) {
      if (ratio > 1) {
        return height;
      }

      return height / 2;
    }

    return height;
  }, [config.leaves.length, ratio, height]);

  return (
    <div
      className={cn("flex", `flex-${flexDirection}`)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        gap: `${gap}px`,
      }}
    >
      {config.leaves.map((leaf, index) => {
        const childLayoutId = `${layoutId || "root"}-${index}`;

        if (leaf.type === "child") {
          return (
            <Leaf
              key={leaf.id}
              activeElementId={activeElementId}
              setActiveElementId={setActiveElementId}
              leaf={leaf}
              width={leafWidth}
              height={leafHeight}
              onDelete={onDelete}
              componentStack={componentStack}
              onReArrange={onReArrange}
            />
          );
        }

        return (
          <Dwindle
            key={leaf.id}
            config={leaf}
            width={
              ratio > 1 ? (leaf.leaves.length > 1 ? width / 2 : width) : width
            }
            height={
              ratio > 1 ? height : leaf.leaves.length > 1 ? height / 2 : height
            }
            onDelete={onDelete}
            gap={gap}
            componentStack={componentStack}
            onReArrange={onReArrange}
            layoutId={childLayoutId}
          />
        );
      })}
    </div>
  );
};

export default Dwindle;
