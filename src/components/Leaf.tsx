import { useMemo, useRef } from "react";
import { cn } from "../lib/cn";
import { Child, TWindowManagerConfig } from "../types";
import { XIcon } from "lucide-react";
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
  windowManagerConfig,
}: // isRow,
LeafProps) => {
  const { theme } = useAppContext();
  const { borderRadius, borderWidth } = windowManagerConfig;
  const leafRef = useRef<HTMLElement>();

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

  return (
    <motion.div
      key={leaf.id}
      className={cn(
        "overflow-hidden transition-colors duration-300",
        isDragging ? "bg-bgPrimary" : "bg-transparent",
        isDragging ? "z-20" : "z-10"
      )}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        border: `${borderWidth}px solid ${
          activeElementId === leaf.id
            ? activeBorderColor
            : isOver
            ? "green"
            : inactiveBorderColor
        }`,
        borderRadius: `${borderRadius}px`,
        ...style,
      }}
      onMouseEnter={() => {
        if (isOver) {
          return;
        }
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
      // layout="position"
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

        {/* Drag Handle */}

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

        <button
          className="drag-handle flex flex-1 h-full items-center justify-center"
          {...dragAttributes}
          {...listeners} // Attach drag listeners to the handle
        ></button>
      </div>
      {leaf.component}
    </motion.div>
  );
};
