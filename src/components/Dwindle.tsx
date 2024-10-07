import React, { useEffect, useMemo, useState } from "react";
import { Child, Root, TWindowManagerConfig } from "../types";
import { cn } from "../lib/cn";
import { Leaf } from "./Leaf";

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

  return (
    <div
      className={cn("flex", `flex-${flexDirection}`)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        gap: `${windowManagerConfig.gap}px`,
      }}
    >
      <Leaf
        activeElementId={activeElementId}
        setActiveElementId={setActiveElementId}
        leaf={child as Child}
        width={leafWidth}
        height={leafHeight}
        setWidth={(width) => {
          setLeafWidth(leafWidth + width);
        }}
        onDelete={onDelete}
        componentStack={componentStack}
        onReArrange={onReArrange}
        windowManagerConfig={windowManagerConfig}
      />

      {rootOrChild ? (
        rootOrChild.type === "child" ? (
          <div>
            <Leaf
              activeElementId={activeElementId}
              setActiveElementId={setActiveElementId}
              leaf={rootOrChild as Child}
              width={flexDirection === "row" ? width - leafWidth : width}
              height={flexDirection === "row" ? height : height - leafHeight}
              setWidth={(width) => {
                setLeafWidth(leafWidth - width);
              }}
              onDelete={onDelete}
              componentStack={componentStack}
              onReArrange={onReArrange}
              windowManagerConfig={windowManagerConfig}
            />
          </div>
        ) : (
          <Dwindle
            config={rootOrChild as Root}
            windowManagerConfig={windowManagerConfig}
            width={flexDirection === "row" ? width - leafWidth : width}
            height={flexDirection === "row" ? height : height - leafHeight}
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
