import { getComponentById } from "@/lib/utils";
import { TFloatingConfig, TWindowManagerConfig } from "@/types";
import { useDroppable } from "@dnd-kit/core";
import { useMemo } from "react";
import { FloatElement } from "./FloatElement";

interface FloatDroppableProps {
  componentStack: string[];
  setComponentStack: React.Dispatch<React.SetStateAction<string[]>>;
  windowManagerConfig: TWindowManagerConfig;
  floatingConfig: TFloatingConfig[];
  setFloatingConfig: React.Dispatch<React.SetStateAction<TFloatingConfig[]>>;
}

export const FloatDroppable = ({
  componentStack,
  setComponentStack,
  windowManagerConfig,
  floatingConfig,
  setFloatingConfig,
}: FloatDroppableProps) => {
  const { setNodeRef } = useDroppable({
    id: "float-droppable",
  });

  const components = useMemo(
    () => componentStack.map((comp) => getComponentById(comp)),
    [componentStack]
  );

  const renderComponents = () => {
    return components.map((component, index) => {
      return (
        <FloatElement
          key={componentStack[index]}
          component={component}
          index={index}
          componentStack={componentStack}
          setComponentStack={setComponentStack}
          windowManagerConfig={windowManagerConfig}
          floatingConfig={floatingConfig}
          setFloatingConfig={setFloatingConfig}
        />
      );
    });
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        backdropFilter: componentStack.length > 0 ? "blur(10px)" : "none",
      }}
      className="flex-1 py-2"
    >
      {renderComponents()}
    </div>
  );
};
