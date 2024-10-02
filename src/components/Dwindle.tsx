import React, { useState } from "react";
import { Child, Root } from "../types";
import { cn } from "../lib/cn";
import { EllipsisVerticalIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  height,
  leaf,
  onDelete,
  setActiveElementId,
  width,
  componentStack,
  onReArrange,
}: LeafProps) => {
  const [contextMenuOpened, setContextMenuOpened] = useState(false);

  return (
    <motion.div
      key={leaf.id}
      className={cn(
        "border-2 border-borderPrimary rounded-xl overflow-hidden transition-colors duration-300",
        activeElementId === leaf.id && "border-textRose"
      )}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
      }}
      onMouseEnter={() => setActiveElementId(leaf.id)}
      onMouseLeave={() => setActiveElementId("")}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="h-6 px-4 py-2 flex items-center gap-2 bg-bgTertiary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <motion.button
          onClick={() => {
            onDelete(leaf.id);
          }}
          className="h-3 w-3 bg-red-500 rounded-full cursor-pointer flex items-center justify-center text-red-500 hover:text-white transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <XIcon className="h-2 w-2" />
        </motion.button>

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
      </motion.div>
      {leaf.component}
    </motion.div>
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
}

const Dwindle: React.FC<DwindleProps> = ({
  config,
  width,
  height,
  onDelete,
  gap = 4,
  componentStack,
  onReArrange,
}) => {
  const [activeElementId, setActiveElementId] = useState("");
  const ratio = width / height;
  const flexDirection = ratio > 1 ? "row" : "col";

  return (
    <motion.div
      className={cn("flex", `flex-${flexDirection}`)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        gap: `${gap}px`,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {config.leaves.map((leaf) => {
          if (leaf.type === "child") {
            return (
              <Leaf
                key={leaf.id}
                activeElementId={activeElementId}
                setActiveElementId={setActiveElementId}
                leaf={leaf}
                height={height}
                width={width}
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
                ratio > 1
                  ? height
                  : leaf.leaves.length > 1
                  ? height / 2
                  : height
              }
              onDelete={onDelete}
              gap={gap}
              componentStack={componentStack}
              onReArrange={onReArrange}
            />
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dwindle;
