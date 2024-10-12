import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { addComponent, getConfig } from "./lib/dwindle";
import { INITIAL_CONFIG } from "./lib/constants";
import { Root, TWindowManagerConfig } from "./types";
import { Ascii } from "./components/Ascii";
import { LayoutPanelLeftIcon } from "lucide-react";
import { DEFAULT_WINDOW_MANAGER_CONFIG } from "./lib/wmConfig";
import { getComponentById } from "./lib/utils";
import { WindowManagerConfig } from "./components/WindowManagerConfig";
import useLocalStorage from "./hooks/useLocalStorage";
import { useAppContext } from "./hooks/useAppContext";
import { DndContext } from "@dnd-kit/core";
import { DwindleWrapper } from "./components/DwindleWrapper";

function App() {
  const { theme } = useAppContext();
  const [componentStack, setComponentStack] = useState<Array<string>>([]);

  const [config, setConfig] = useState<Root>(INITIAL_CONFIG);
  const [isConfigDialogOpen, setIsConfigDialogOpen] = useState(false);

  const [windowManagerConfig, setWindowManagerConfig] =
    useLocalStorage<TWindowManagerConfig>(
      "windowManagerConfig",
      DEFAULT_WINDOW_MANAGER_CONFIG
    );

  useEffect(() => {
    // add theme to the html element's classList
    const html = document.querySelector("html");
    if (theme === "dark") {
      html?.classList?.add("dark");
    } else {
      html?.classList?.remove("dark");
    }
  }, [theme]);

  return (
    <main className="h-screen w-screen overflow-hidden bg-bgPrimary relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <Ascii />

        <div className="text-center text-textSecondary text-sm mt-2">
          <p>
            This portfolio is inspired by tiling window managers.{" "}
            <LayoutPanelLeftIcon className="inline h-3.5 w-3.5" />
            <br />
            Built with React, TypeScript, and TailwindCSS. Click on the tabs
            above to explore!
          </p>
        </div>
      </div>

      <div
        className={`mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col gap-2 h-full w-full py-4 z-20 ${
          config.leaves.length === 0 ? "" : "relative"
        }`}
      >
        <Nav
          onConfigClick={() => {
            setIsConfigDialogOpen(true);
          }}
          onItemChange={(item) => {
            if (componentStack.includes(item.id)) {
              return;
            }
            const component = getComponentById(item.id);
            if (component) {
              setConfig(
                addComponent(config, {
                  type: "child",
                  id: item.id,
                  component,
                })
              );

              setComponentStack((prev) => [...prev, item.id]);
            }
          }}
          componentStack={componentStack}
        />

        <DndContext
          onDragEnd={(event) => {
            const from = event.active.id as string;
            const to = event.over?.id as string;

            if (!to) return;
            if (from === to) return;

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
        >
          <DwindleWrapper
            config={config}
            setConfig={setConfig}
            componentStack={componentStack}
            setComponentStack={setComponentStack}
            windowManagerConfig={windowManagerConfig}
          />
        </DndContext>

        <WindowManagerConfig
          open={isConfigDialogOpen}
          setOpen={setIsConfigDialogOpen}
          windowManagerConfig={windowManagerConfig}
          setWindowManagerConfig={setWindowManagerConfig}
        />
      </div>
    </main>
  );
}

export default App;
