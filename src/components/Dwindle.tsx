import React, { useState } from "react";
import { Root } from "../types";
import { cn } from "../lib/cn";
import { XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

                  {/* <motion.button
                    onClick={() => {
                      onDelete(leaf.id);
                    }}
                    className="h-3 w-3 bg-green-500 rounded-full cursor-pointer flex items-center justify-center text-green-500 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <XIcon className="h-2 w-2" />
                  </motion.button> */}
                </motion.div>
                {leaf.component}
              </motion.div>
            );
          } else {
            return (
              <Dwindle
                key={leaf.id}
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
            );
          }
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dwindle;
