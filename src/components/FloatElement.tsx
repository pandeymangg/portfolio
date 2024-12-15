import { useAppContext } from "@/hooks/useAppContext";
import { TFloatingConfig, TWindowManagerConfig } from "@/types";
import { useDraggable } from "@dnd-kit/core";
import { XIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

interface FloatElementProps {
  component: React.ReactNode;
  index: number;
  componentStack: string[];
  setComponentStack: React.Dispatch<React.SetStateAction<string[]>>;
  windowManagerConfig: TWindowManagerConfig;
  floatingConfig: TFloatingConfig[];
  setFloatingConfig: React.Dispatch<React.SetStateAction<TFloatingConfig[]>>;
}

export const FloatElement = ({
  component,
  index,
  componentStack,
  setComponentStack,
  windowManagerConfig,
  floatingConfig,
  setFloatingConfig,
}: FloatElementProps) => {
  const { theme } = useAppContext();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: componentStack[index],
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  const componentId = componentStack[index];

  // Get the current component's config, with fallback to default values
  const currentComponentConfig = floatingConfig.find(
    (item) => item.id === componentId
  ) || {
    id: componentId,
    position: { x: 0, y: 0 },
    width: 500,
    height: 500,
  };

  const { top, left, width, height } = {
    top: currentComponentConfig.position.y,
    left: currentComponentConfig.position.x,
    width: currentComponentConfig.width,
    height: currentComponentConfig.height,
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const [isResizing, setIsResizing] = useState({
    right: false,
    bottom: false,
  });

  useEffect(() => {
    if (Object.values(isResizing).some(Boolean)) {
      const html = document.querySelector("html");
      if (html) {
        html.classList.add("select-none");
      }

      const handleMouseMove = (e: MouseEvent) => {
        e.preventDefault();

        setFloatingConfig((prev) => {
          const component = prev.find((item) => item.id === componentId);

          if (component) {
            let newWidth = component.width;
            let newHeight = component.height;

            if (isResizing.right) {
              newWidth = Math.max(200, newWidth + e.movementX);
            }

            if (isResizing.bottom) {
              newHeight = Math.max(200, newHeight + e.movementY);
            }

            return prev.map((item) => {
              if (item.id === componentId) {
                return {
                  ...item,
                  width: newWidth,
                  height: newHeight,
                };
              }

              return item;
            });
          }

          return prev;
        });
      };

      const handleMouseUp = () => {
        setIsResizing({
          right: false,
          bottom: false,
        });
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
  }, [componentId, isResizing, setFloatingConfig]);

  const borderColor = useMemo(() => {
    // If the component is the topmost in the stack, use the activeBorderColor
    if (componentStack[componentStack.length - 1] === componentId) {
      return theme === "dark"
        ? windowManagerConfig.activeBorderColor.dark
        : windowManagerConfig.activeBorderColor.light;
    }

    // Otherwise, use the inactiveBorderColor
    return theme === "dark"
      ? windowManagerConfig.inactiveBorderColor.dark
      : windowManagerConfig.inactiveBorderColor.light;
  }, [
    componentId,
    componentStack,
    theme,
    windowManagerConfig.activeBorderColor.dark,
    windowManagerConfig.activeBorderColor.light,
    windowManagerConfig.inactiveBorderColor.dark,
    windowManagerConfig.inactiveBorderColor.light,
  ]);

  return (
    <div
      className="bg-bgPrimary"
      style={{
        ...style,
        borderRadius: windowManagerConfig.borderRadius,
        borderWidth: windowManagerConfig.borderWidth,
        borderColor,
        zIndex: index + 1,
        width,
        height,
        position: "fixed",
        top,
        left,
        overflow: "hidden",
      }}
      ref={containerRef}
    >
      <div className="h-6 px-4 py-2 flex items-center gap-2 bg-bgSecondary">
        <button
          onClick={() => {
            setComponentStack((prev) => {
              return prev.filter((_, i) => i !== index);
            });
          }}
          className="h-3 w-3 bg-red-500 rounded-full cursor-pointer flex items-center justify-center text-red-500 hover:text-white transition-colors duration-200"
        >
          <XIcon className="h-2 w-2" />
        </button>

        <div
          onMouseDown={(e) => {
            e.stopPropagation(); // Prevent triggering other mouse events
          }}
        />

        <button
          className="drag-handle flex flex-1 h-full items-center justify-center"
          {...attributes}
          {...listeners}
          ref={setNodeRef}
          onMouseDown={() => {
            setComponentStack((prev) => {
              const filteredStack = prev.filter((_, i) => i !== index);
              return [...filteredStack, prev[index]];
            });
          }}
        ></button>
      </div>
      {component}

      {/* Right resize handle */}
      <div
        className={`absolute w-1 right-0 top-10 bottom-0 bg-bgPrimary cursor-col-resize`}
        onMouseDown={(e) => {
          setIsResizing({
            right: true,
            bottom: false,
          });
          setComponentStack((prev) => {
            const filteredStack = prev.filter((_, i) => i !== index);
            return [...filteredStack, prev[index]];
          });
          e.stopPropagation();
        }}
      ></div>

      {/* Bottom resize handle */}
      <div
        className={`absolute h-1 left-0 right-0 bottom-0 bg-bgPrimary cursor-row-resize`}
        onMouseDown={(e) => {
          setIsResizing({
            right: false,
            bottom: true,
          });
          setComponentStack((prev) => {
            const filteredStack = prev.filter((_, i) => i !== index);
            return [...filteredStack, prev[index]];
          });
          e.stopPropagation();
        }}
      ></div>
    </div>
  );
};
