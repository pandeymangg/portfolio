import { useRef, useState } from "react";
import { cn } from "../lib/cn";
import { Child, TWindowManagerConfig } from "../types";
import { EllipsisVerticalIcon, XIcon } from "lucide-react";
import { getComponentLabelById } from "../lib/utils";

interface LeafProps {
  leaf: Child;
  activeElementId: string;
  setActiveElementId: React.Dispatch<React.SetStateAction<string>>;
  width: number;
  height: number;
  setWidth: (width: number) => void;
  onDelete: (id: string) => void;
  onReArrange?: (source: string, destination: string) => void;
  componentStack?: Array<string>;
  windowManagerConfig: TWindowManagerConfig;
}

export const Leaf = ({
  activeElementId,
  leaf,
  onDelete,
  setActiveElementId,
  height,
  width,
  setWidth,
  componentStack,
  onReArrange,
  windowManagerConfig,
}: LeafProps) => {
  const [contextMenuOpened, setContextMenuOpened] = useState(false);
  const leafRef = useRef<HTMLDivElement>(null);
  const { activeBorderColor, borderRadius, borderWidth, inactiveBorderColor } =
    windowManagerConfig;

  return (
    <div
      className={cn("overflow-hidden transition-colors duration-300")}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        border: `${borderWidth}px solid ${
          activeElementId === leaf.id ? activeBorderColor : inactiveBorderColor
        }`,
        borderRadius: `${borderRadius}px`,
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
                "absolute top-4 left-0 bottom-12 min-w-max min-h-max bg-bgTertiary border rounded-lg bg-bgSecondary border-borderPrimary"
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
                        setContextMenuOpened(false);
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

        <button
          className="text-textPrimary"
          onClick={() => {
            setWidth(10);
          }}
        >
          +
        </button>

        <button className="text-textPrimary" onClick={() => setWidth(-10)}>
          -
        </button>
      </div>
      {leaf.component}
    </div>
  );
};
