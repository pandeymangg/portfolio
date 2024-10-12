import { getConfig, removeComponent } from "@/lib/dwindle";
import { getComponentById } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Dwindle from "./Dwindle";
import { useDroppable } from "@dnd-kit/core";
import { Root, TWindowManagerConfig } from "@/types";

interface DwindleWrapperProps {
  componentStack: string[];
  setComponentStack: React.Dispatch<React.SetStateAction<string[]>>;
  config: Root;
  setConfig: React.Dispatch<React.SetStateAction<Root>>;
  windowManagerConfig: TWindowManagerConfig;
}

export const DwindleWrapper = ({
  componentStack,
  setComponentStack,
  windowManagerConfig,
  config,
  setConfig,
}: DwindleWrapperProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentHeight, setParentHeight] = useState<number>(0);
  const [parentWidth, setParentWidth] = useState<number>(0);

  useEffect(() => {
    if (parentRef.current) {
      const { clientWidth, clientHeight } = parentRef.current;

      setParentHeight(clientHeight);
      setParentWidth(clientWidth);
    }
  }, [parentRef]);

  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      className="flex-1 py-2"
      ref={parentRef}
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div ref={setNodeRef} style={style}>
        <Dwindle
          config={config}
          windowManagerConfig={windowManagerConfig}
          height={parentHeight}
          width={parentWidth}
          onDelete={(leafId: string) => {
            const updateConfig = removeComponent(config, leafId);
            if (updateConfig) {
              setConfig(updateConfig);

              setComponentStack((prev) => prev.filter((id) => id !== leafId));
            }
          }}
          componentStack={componentStack}
          onReArrange={(from: string, to: string) => {
            if (componentStack.includes(from) && componentStack.includes(to)) {
              const newComponentStack = componentStack.map((item) => {
                if (item === from) {
                  return to;
                }
                if (item === to) {
                  return from;
                }
                return item;
              });

              setComponentStack(newComponentStack);
              setConfig(
                getConfig(
                  newComponentStack.map((item) => ({
                    component: getComponentById(item),
                    id: item,
                  }))
                )
              );
            } else {
              console.error("Invalid re-arrangement");
              return;
            }
          }}
        />
      </div>
    </div>
  );
};
