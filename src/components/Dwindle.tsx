import React, { useEffect, useMemo, useState } from "react";
import { Child, Root, TWindowManagerConfig } from "../types";
import { cn } from "../lib/cn";
import { Leaf } from "./Leaf";
import { AnimatePresence } from "framer-motion";

interface DwindleProps {
  config: Root;
  windowManagerConfig: TWindowManagerConfig;
  width: number;
  height: number;
  onDelete: (id: string) => void;
  componentStack?: Array<string>;
  onReArrange?: (source: string, destination: string) => void;
}

const Dwindle: React.FC<DwindleProps> = ({
  config,
  windowManagerConfig,
  width: widthProp,
  height: heightProp,
  onDelete,
  componentStack,
  onReArrange,
}) => {
  const [activeElementId, setActiveElementId] = useState("");
  const [width, setWidth] = useState(widthProp);
  const [height, setHeight] = useState(heightProp);

  useEffect(() => {
    setWidth(widthProp);
    setHeight(heightProp);
  }, [heightProp, widthProp]);

  const ratio = useMemo(() => width / height, [width, height]);
  const flexDirection = useMemo(() => (ratio > 1 ? "row" : "col"), [ratio]);

  const leafWidthDerived = useMemo(() => {
    if (config.leaves.length > 1) {
      if (ratio > 1) {
        return width / 2;
      }

      return width;
    }

    return width;
  }, [config.leaves.length, ratio, width]);

  const leafHeightDerived = useMemo(() => {
    if (config.leaves.length > 1) {
      if (ratio > 1) {
        return height;
      }

      return height / 2;
    }

    return height;
  }, [config.leaves.length, ratio, height]);

  const [leafWidth, setLeafWidth] = useState(leafWidthDerived);
  const [leafHeight, setLeafHeight] = useState(leafHeightDerived);

  useEffect(() => {
    setLeafWidth(leafWidthDerived);
    setLeafHeight(leafHeightDerived);
  }, [leafHeightDerived, leafWidthDerived]);

  const [child, rootOrChild] = config.leaves;

  if (!child && !rootOrChild) {
    return null;
  }

  // Determine if we're in a horizontal or vertical split
  const isRow = flexDirection === "row";

  return (
    <div
      className={cn("flex", `flex-${flexDirection}`)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        gap: `${windowManagerConfig.gap}px`,
      }}
    >
      <AnimatePresence initial={false}>
        {/* First Leaf */}
        <Leaf
          activeElementId={activeElementId}
          setActiveElementId={setActiveElementId}
          leaf={child as Child}
          width={leafWidth}
          height={leafHeight}
          setWidth={(width) => {
            setLeafWidth(Math.max(200, leafWidth + width));
          }}
          setHeight={(height) => {
            setLeafHeight(Math.max(200, leafHeight + height));
          }}
          onDelete={onDelete}
          componentStack={componentStack}
          onReArrange={onReArrange}
          windowManagerConfig={windowManagerConfig}
          isRow={isRow}
          disableResize={false}
        />
      </AnimatePresence>

      {rootOrChild ? (
        rootOrChild.type === "child" ? (
          <Leaf
            activeElementId={activeElementId}
            setActiveElementId={setActiveElementId}
            leaf={rootOrChild as Child}
            width={flexDirection === "row" ? width - leafWidth : leafWidth}
            height={flexDirection === "row" ? leafHeight : height - leafHeight}
            setWidth={(width) => {
              setLeafWidth(Math.max(200, leafWidth - width));
            }}
            setHeight={(height) => {
              setLeafHeight(Math.max(200, leafHeight - height));
            }}
            onDelete={onDelete}
            componentStack={componentStack}
            onReArrange={onReArrange}
            windowManagerConfig={windowManagerConfig}
            isRow={isRow}
          />
        ) : (
          <Dwindle
            config={rootOrChild as Root}
            windowManagerConfig={windowManagerConfig}
            width={flexDirection === "row" ? width - leafWidth : leafWidth}
            height={flexDirection === "row" ? leafHeight : height - leafHeight}
            onDelete={onDelete}
            componentStack={componentStack}
            onReArrange={onReArrange}
          />
        )
      ) : null}
    </div>
  );
};

export default Dwindle;
