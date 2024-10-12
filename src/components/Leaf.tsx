import { useMemo, useState } from "react";
import { cn } from "../lib/cn";
import { Child, TWindowManagerConfig } from "../types";
import { EllipsisVerticalIcon, GripVerticalIcon, XIcon } from "lucide-react";
import { getComponentLabelById } from "../lib/utils";
import { motion } from "framer-motion";
import { useAppContext } from "@/hooks/useAppContext";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

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
  isRow: boolean;
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
}: // isRow,
LeafProps) => {
  const { theme } = useAppContext();
  const [contextMenuOpened, setContextMenuOpened] = useState(false);
  const { borderRadius, borderWidth } = windowManagerConfig;

  // Determine size prop for animation
  // const sizeProp = isRow ? "width" : "height";
  // const sizeValue = isRow ? width : height;

  const activeBorderColor = useMemo(() => {
    return theme === "dark"
      ? windowManagerConfig.activeBorderColor.dark
      : windowManagerConfig.activeBorderColor.light;
  }, [
    windowManagerConfig.activeBorderColor.dark,
    windowManagerConfig.activeBorderColor.light,
    theme,
  ]);

  const inactiveBorderColor = useMemo(() => {
    return theme === "dark"
      ? windowManagerConfig.inactiveBorderColor.dark
      : windowManagerConfig.inactiveBorderColor.light;
  }, [
    windowManagerConfig.inactiveBorderColor.dark,
    windowManagerConfig.inactiveBorderColor.light,
    theme,
  ]);

  // Draggable hook
  const {
    attributes: dragAttributes,
    listeners,
    setNodeRef: setDraggableNodeRef,
    transform,
  } = useDraggable({
    id: leaf.id,
    data: { type: "leaf", id: leaf.id },
  });

  // Droppable hook
  const { setNodeRef: setDroppableNodeRef } = useDroppable({
    id: leaf.id,
    data: { type: "leaf", id: leaf.id },
  });

  // Combine refs
  const setNodeRef = (node: HTMLElement | null) => {
    setDraggableNodeRef(node);
    setDroppableNodeRef(node);
  };

  const style = {
    transition: "transform 100ms ease",
    transform: CSS.Translate.toString(transform),
  };

  return (
    <motion.div
      key={leaf.id}
      className={cn("overflow-hidden transition-colors duration-300")}
      style={{
        ...style,
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
      // Animation Props
      // initial={{ [sizeProp]: 0, opacity: 0 }}
      // animate={{ [sizeProp]: sizeValue, opacity: 1 }}
      // exit={{ [sizeProp]: 0, opacity: 0 }}
      // transition={{ duration: 0.3 }}
      // layout
      ref={setNodeRef}
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
                "absolute top-4 left-0 bottom-12 min-w-max min-h-max bg-bgSecondary border rounded-lg border-borderPrimary"
              )}
            >
              <div className="bg-bgSecondary px-3 py-2">
                <p className="text-textPrimary text-xs text-left">
                  Replace with
                </p>
              </div>

              {componentStack
                ?.filter((id) => id !== leaf.id)
                ?.map((item) => {
                  return (
                    <button
                      onClick={() => {
                        if (onReArrange) onReArrange(leaf.id, item);
                        setContextMenuOpened(false);
                      }}
                      className="block py-2 px-3 w-full bg-bgSecondary hover:bg-bgSecondary cursor-pointer text-left"
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

        {/* Drag Handle */}
        <button
          className="drag-handle flex items-center justify-center"
          {...dragAttributes}
          {...listeners} // Attach drag listeners to the handle
        >
          <GripVerticalIcon className="h-4 w-4 text-textPrimary" />
        </button>

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
    </motion.div>
  );
};
