import { TFloatingConfig, TWindowManagerConfig } from "@/types";
import { DndContext } from "@dnd-kit/core";
import { FloatDroppable } from "./FloatDroppable";
import useLocalStorage from "@/hooks/useLocalStorage";

interface FloatProps {
  componentStack: string[];
  setComponentStack: React.Dispatch<React.SetStateAction<string[]>>;
  windowManagerConfig: TWindowManagerConfig;
}

export const Float = ({
  componentStack,
  setComponentStack,
  windowManagerConfig,
}: FloatProps) => {
  const [floatingConfig, setFloatingConfig] = useLocalStorage<
    TFloatingConfig[]
  >(
    "floatingConfig",
    componentStack.map((item, index) => {
      return {
        id: item,
        position: {
          x: (index + 1) * 20,
          y: (index + 1) * 20,
        },
        width: 500,
        height: 500,
      };
    })
  );

  return (
    <DndContext
      onDragEnd={(event) => {
        const { active } = event;
        const { id } = active;

        const component = componentStack.find((item) => item === id);

        if (component) {
          const x = event.delta.x;
          const y = event.delta.y;

          const newFloatingConfig = floatingConfig.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                position: {
                  x: item.position.x + x,
                  y: item.position.y + y,
                },
              };
            }

            return item;
          });

          setFloatingConfig(newFloatingConfig);
        }
      }}
    >
      <FloatDroppable
        componentStack={componentStack}
        setComponentStack={setComponentStack}
        windowManagerConfig={windowManagerConfig}
        floatingConfig={floatingConfig}
        setFloatingConfig={setFloatingConfig}
      />
    </DndContext>
  );
};
