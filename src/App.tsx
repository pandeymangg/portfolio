import { useEffect, useRef, useState } from "react";
import { Nav } from "./components/Nav";
import Dwindle from "./components/Dwindle";
import { addComponent, getConfig, removeComponent } from "./lib/dwindle";
import { INITIAL_CONFIG } from "./lib/constants";
import { Root, TWindowManagerConfig } from "./types";
import { Ascii } from "./components/Ascii";
import { LayoutPanelLeftIcon } from "lucide-react";
import { DEFAULT_WINDOW_MANAGER_CONFIG } from "./lib/wmConfig";
import { getComponentById } from "./lib/utils";
import { WindowManagerConfig } from "./components/WindowManagerConfig";
import useLocalStorage from "./hooks/useLocalStorage";
import { useAppContext } from "./hooks/useAppContext";

function App() {
  const { theme } = useAppContext();
  const [componentStack, setComponentStack] = useState<Array<string>>([]);
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentHeight, setParentHeight] = useState<number>(0);
  const [parentWidth, setParentWidth] = useState<number>(0);

  const [config, setConfig] = useState<Root>(INITIAL_CONFIG);
  const [isConfigDialogOpen, setIsConfigDialogOpen] = useState(false);

  const [windowManagerConfig, setWindowManagerConfig] =
    useLocalStorage<TWindowManagerConfig>(
      "windowManagerConfig",
      DEFAULT_WINDOW_MANAGER_CONFIG
    );

  useEffect(() => {
    if (parentRef.current) {
      const { clientWidth, clientHeight } = parentRef.current;

      setParentHeight(clientHeight);
      setParentWidth(clientWidth);
    }
  }, [parentRef]);

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
    <main className="h-screen w-screen bg-bgPrimary relative">
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

        {config && (
          <div
            className="flex-1 py-2"
            ref={parentRef}
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            <Dwindle
              config={config}
              windowManagerConfig={windowManagerConfig}
              height={parentHeight}
              width={parentWidth}
              onDelete={(leafId: string) => {
                const updateConfig = removeComponent(config, leafId);
                if (updateConfig) {
                  setConfig(updateConfig);

                  setComponentStack((prev) =>
                    prev.filter((id) => id !== leafId)
                  );
                }
              }}
              componentStack={componentStack}
              onReArrange={(from: string, to: string) => {
                if (
                  componentStack.includes(from) &&
                  componentStack.includes(to)
                ) {
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
        )}

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
