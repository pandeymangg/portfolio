import { useEffect, useRef, useState } from "react";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import Dwindle from "./components/Dwindle";
import { addComponent, removeComponent } from "./lib/dwindle";
import { Projects } from "./components/Projects";
import { Work } from "./components/Work";
import { INITIAL_CONFIG } from "./lib/constants";
import { Root } from "./types";
import { Ascii } from "./components/Ascii";
import { Links } from "./components/Links";

function App() {
  const [componentStack, setComponentStack] = useState<Array<string>>([]);
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentHeight, setParentHeight] = useState<number>(0);
  const [parentWidth, setParentWidth] = useState<number>(0);

  const [config, setConfig] = useState<Root>(INITIAL_CONFIG);

  useEffect(() => {
    if (parentRef.current) {
      const { clientWidth, clientHeight } = parentRef.current;

      setParentHeight(clientHeight);
      setParentWidth(clientWidth);
    }
  }, [parentRef]);

  const getComponent = (itemId: string) => {
    if (itemId === "aboutMe") {
      return <Home />;
    }

    if (itemId === "work") {
      return <Work />;
    }

    if (itemId === "projects") {
      return <Projects />;
    }

    if (itemId === "links") {
      return <Links />;
    }
  };

  return (
    <main className="h-screen w-screen bg-bgPrimary relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <Ascii />
      </div>

      <div
        className={`mx-auto max-w-screen-xl flex flex-col gap-2 h-full w-full py-4 z-20 ${
          config.leaves.length === 0 ? "" : "relative"
        }`}
      >
        <Nav
          onItemChange={(item) => {
            if (componentStack.includes(item.id)) {
              return;
            }

            const component = getComponent(item.id);
            if (component) {
              setConfig(
                addComponent(config, { type: "child", id: item.id, component })
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
              backdropFilter: "blur(5px)",
            }}
          >
            <Dwindle
              config={config}
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
              gap={10}
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
