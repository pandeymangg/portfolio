import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { Child, TWindowManagerConfig } from "../types";
import { XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useAppContext } from "@/hooks/useAppContext";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";

interface LeafProps {
  leaf: Child;
  activeElementId: string;
  setActiveElementId: React.Dispatch<React.SetStateAction<string>>;
  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  onDelete: (id: string) => void;
  onReArrange?: (source: string, destination: string) => void;
  componentStack?: Array<string>;
  windowManagerConfig: TWindowManagerConfig;
  isRow: boolean;
  disableResize?: boolean;
}

export const Leaf = ({
  activeElementId,
  leaf,
  onDelete,
  setActiveElementId,
  height,
  setHeight,
  width,
  setWidth,
  windowManagerConfig,
  disableResize = true,
  isRow,
}: LeafProps) => {
  const { theme } = useAppContext();
  const { borderRadius, borderWidth } = windowManagerConfig;
  const leafRef = useRef<HTMLElement>();
  const [isResizing, setIsResizing] = useState(false);

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
    isDragging,
  } = useDraggable({
    id: leaf.id,
    data: { type: "leaf", id: leaf.id },
  });

  // Droppable hook
  const { setNodeRef: setDroppableNodeRef, isOver } = useDroppable({
    id: leaf.id,
    data: { type: "leaf", id: leaf.id },
  });

  // Combine refs
  const setNodeRef = (node: HTMLElement | null) => {
    setDraggableNodeRef(node);
    setDroppableNodeRef(node);
    if (node) {
      leafRef.current = node;
    }
  };

  const style = {
    transition: "transform 100ms ease",
    transform: CSS.Translate.toString(transform),
  };

  useEffect(() => {
    if (disableResize) return;

    if (isResizing) {
      const html = document.querySelector("html");

      if (html) {
        html.classList.add("select-none");
      }

      const handleMouseMove = (e: MouseEvent) => {
        e.preventDefault();
        if (isResizing) {
          // change the width or height based on the direction
          if (isRow) {
            setWidth(e.movementX);
          } else {
            setHeight(e.movementY);
          }
        }
      };

      const handleMouseUp = () => {
        if (isResizing) {
          setIsResizing(false);
        }
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        const html = document.querySelector("html");
        if (html) {
          html.classList.remove("select-none");
        }
      };
    } else {
      const html = document.querySelector("html");
      if (html) {
        html.classList.remove("select-none");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResizing, setWidth]);

  return (
    <motion.div
      key={leaf.id}
      className={cn(
        "overflow-hidden transition-colors duration-300 relative",
        isDragging ? "bg-bgPrimary" : "bg-transparent",
        isDragging ? "z-20" : "z-10",
        isOver && "shadow-xl dark:shadow-slate-100",
      )}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        border: `${borderWidth}px solid ${
          activeElementId === leaf.id ? activeBorderColor : inactiveBorderColor
        }`,
        borderRadius: `${borderRadius}px`,
        ...style,
      }}
      onMouseEnter={() => {
        // if (isOver) {
        //   return;
        // }
        setActiveElementId(leaf.id);
      }}
      onMouseLeave={() => setActiveElementId("")}
      // Animation Props
      // initial={{ [sizeProp]: 0, opacity: 0 }}
      // animate={{ [sizeProp]: sizeValue, opacity: 1 }}
      // exit={{ [sizeProp]: 0, opacity: 0 }}
      // transition={{ duration: 0.3 }}
      // initial={{ x: 0, y: 0 }}
      // animate={{ x: 10, y: 10 }}
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

        <div
          className={cn(
            disableResize && "hidden",
            "absolute w-1",
            isRow ? "cursor-col-resize" : "cursor-row-resize",
            isRow
              ? "right-0 top-10 bottom-0"
              : "left-0 right-0 bottom-0 w-full h-1",
            isDragging ? "bg-bgPrimary" : "bg-transparent",
          )}
          onMouseDown={(e) => {
            setIsResizing(true);
            e.stopPropagation(); // Prevent triggering other mouse events
          }}
        />

        <button
          className="drag-handle flex flex-1 h-full items-center justify-center"
          {...dragAttributes}
          {...listeners}
        ></button>
      </div>
      {leaf.component}
    </motion.div>
  );
};
