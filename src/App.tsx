import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { addComponent, getConfig, removeComponent } from "./lib/dwindle";
import { INITIAL_CONFIG } from "./lib/constants";
import { Root, TWindowManagerConfig } from "./types";
import { Ascii } from "./components/Ascii";
import { LayoutPanelLeftIcon, MoonIcon, SunIcon } from "lucide-react";
import { DEFAULT_WINDOW_MANAGER_CONFIG } from "./lib/wmConfig";
import { getComponentById } from "./lib/utils";
import { WindowManagerConfig } from "./components/WindowManagerConfig";
import useLocalStorage from "./hooks/useLocalStorage";
import { useAppContext } from "./hooks/useAppContext";
import { DndContext } from "@dnd-kit/core";
import { DwindleWrapper } from "./components/DwindleWrapper";
import { Float } from "./components/Float";
import { Home } from "./components/windows/Home";
import { Work } from "./components/windows/Work";
import { Projects } from "./components/windows/Projects";
import { Links } from "./components/windows/Links";
import imageUrl from "./assets/pandeyman.jpeg";

const App = () => {
  const { theme, setTheme } = useAppContext();
  const [componentStack, setComponentStack] = useState<Array<string>>([]);

  const [config, setConfig] = useState<Root>(INITIAL_CONFIG);
  const [isConfigDialogOpen, setIsConfigDialogOpen] = useState(false);

  const [windowManagerConfig, setWindowManagerConfig] =
    useLocalStorage<TWindowManagerConfig>(
      "windowManagerConfig",
      DEFAULT_WINDOW_MANAGER_CONFIG,
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
    <main className="h-screen w-screen md:overflow-hidden bg-bgPrimary relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
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
        className={`mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex-col gap-2 h-full w-full py-4 z-20 hidden md:flex ${
          config.leaves.length === 0 ? "" : "relative"
        }`}
      >
        <Nav
          onConfigClick={() => {
            setIsConfigDialogOpen(true);
          }}
          onItemChange={(item) => {
            if (componentStack.includes(item.id)) {
              setConfig((prev) => {
                const updatedConfig = removeComponent(prev, item.id);
                if (updatedConfig) {
                  return updatedConfig;
                }

                return prev;
              });

              setComponentStack((prev) => prev.filter((i) => i !== item.id));
              return;
            }
            if (windowManagerConfig.tiling) {
              const component = getComponentById(item.id);
              if (component) {
                setConfig(
                  addComponent(config, {
                    type: "child",
                    id: item.id,
                    component,
                  }),
                );
              }
            }

            setComponentStack((prev) => [...prev, item.id]);
          }}
          componentStack={componentStack}
        />

        {windowManagerConfig.tiling ? (
          <DndContext
            onDragEnd={(event) => {
              const from = event.active.id as string;
              const to = event.over?.id as string;

              if (!to) return;
              if (from === to) return;

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
                    })),
                  ),
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
        ) : (
          <Float
            componentStack={componentStack}
            setComponentStack={setComponentStack}
            windowManagerConfig={windowManagerConfig}
          />
        )}

        <WindowManagerConfig
          open={isConfigDialogOpen}
          setOpen={setIsConfigDialogOpen}
          windowManagerConfig={windowManagerConfig}
          setWindowManagerConfig={setWindowManagerConfig}
        />
      </div>

      <div className="md:hidden">
        {/* mobile nav */}
        <nav className="sticky top-0 z-50 mx-auto my-0 bg-bgPrimary h-20 flex items-center justify-center">
          <div className="w-full flex items-center justify-between max-w-xs">
            <h1 className="text-center text-textPrimary text-lg font-bold">
              Anshuman Pandey
            </h1>

            <div>
              <button>
                {theme === "dark" ? (
                  <SunIcon
                    onClick={() => setTheme("light")}
                    className="text-customRed w-4 h-4"
                  />
                ) : (
                  <MoonIcon
                    onClick={() => setTheme("dark")}
                    className="text-customRed w-4 h-4"
                  />
                )}
              </button>
            </div>
          </div>
        </nav>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center">
              <img
                src={imageUrl}
                alt="Anshuman Pandey"
                className="rounded-full h-40 w-40 border-4 border-orange"
              />
            </div>
            <h1 className="text-center text-textPrimary text-2xl font-bold">
              Hey, I'm Anshuman Pandey
            </h1>
          </div>
          <div className="flex flex-col px-8 gap-6">
            <Home />
            <Work />
            <Projects />
            <Links />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
