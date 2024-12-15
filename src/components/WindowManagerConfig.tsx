import React, { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { TWindowManagerConfig } from "@/types";
import { useAppContext } from "@/hooks/useAppContext";

interface WindowManagerConfigProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  windowManagerConfig: TWindowManagerConfig;
  setWindowManagerConfig: React.Dispatch<
    React.SetStateAction<TWindowManagerConfig>
  >;
}

export const WindowManagerConfig = ({
  windowManagerConfig,
  setWindowManagerConfig,
  open,
  setOpen,
}: WindowManagerConfigProps) => {
  const [localWindowManagerConfig, setLocalWindowManagerConfig] =
    useState(windowManagerConfig);

  const { theme } = useAppContext();

  const activeBorderColor = useMemo(() => {
    return theme === "dark"
      ? localWindowManagerConfig.activeBorderColor.dark
      : localWindowManagerConfig.activeBorderColor.light;
  }, [
    localWindowManagerConfig.activeBorderColor.dark,
    localWindowManagerConfig.activeBorderColor.light,
    theme,
  ]);

  const inactiveBorderColor = useMemo(() => {
    return theme === "dark"
      ? localWindowManagerConfig.inactiveBorderColor.dark
      : localWindowManagerConfig.inactiveBorderColor.light;
  }, [
    localWindowManagerConfig.inactiveBorderColor.dark,
    localWindowManagerConfig.inactiveBorderColor.light,
    theme,
  ]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-textPrimary bg-bgSecondary border border-borderPrimary fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <DialogHeader>
          <DialogTitle className="text-textPrimary">
            Window manager configuration
          </DialogTitle>
          <DialogDescription className="text-textPrimary">
            Configure the appearance of the Window manager
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-4">
            {/* border radius */}
            <div className="flex flex-col gap-2">
              <label htmlFor="borderRadius">Border radius</label>
              <input
                type="range"
                id="borderRadius"
                name="borderRadius"
                min="0"
                max="50"
                className="accent-orange cursor-pointer"
                value={localWindowManagerConfig.borderRadius}
                onChange={(e) =>
                  setLocalWindowManagerConfig((prev) => ({
                    ...prev,
                    borderRadius: parseInt(e.target.value),
                  }))
                }
              />
            </div>

            {/* gap */}
            <div className="flex flex-col gap-2">
              <label htmlFor="gap">Gap</label>
              <input
                type="range"
                id="gap"
                name="gap"
                min="0"
                max="50"
                className="accent-orange cursor-pointer"
                value={localWindowManagerConfig.gap}
                onChange={(e) => {
                  setLocalWindowManagerConfig((prev) => ({
                    ...prev,
                    gap: parseInt(e.target.value),
                  }));
                }}
              />
            </div>

            {/* active border color */}
            <div className="flex flex-col gap-2">
              <label htmlFor="activeBorderColor">Active border color</label>
              <input
                type="color"
                id="activeBorderColor"
                name="activeBorderColor"
                value={activeBorderColor}
                className="cursor-pointer"
                onChange={(e) => {
                  const newColor =
                    theme === "dark"
                      ? { dark: e.target.value }
                      : {
                          light: e.target.value,
                        };
                  setLocalWindowManagerConfig((prev) => ({
                    ...prev,
                    activeBorderColor: {
                      ...prev.activeBorderColor,
                      ...newColor,
                    },
                  }));
                }}
              />
            </div>

            {/* inactive border color */}
            <div className="flex flex-col gap-2">
              <label htmlFor="inactiveBorderColor">Inactive border color</label>
              <input
                type="color"
                id="inactiveBorderColor"
                name="inactiveBorderColor"
                value={inactiveBorderColor}
                className="cursor-pointer"
                onChange={(e) => {
                  const newColor =
                    theme === "dark"
                      ? { dark: e.target.value }
                      : {
                          light: e.target.value,
                        };
                  setLocalWindowManagerConfig((prev) => ({
                    ...prev,
                    inactiveBorderColor: {
                      ...prev.inactiveBorderColor,
                      ...newColor,
                    },
                  }));
                }}
              />
            </div>

            {/* border width */}
            <div className="flex flex-col gap-2">
              <label htmlFor="borderWidth">Border width</label>

              <input
                type="range"
                id="borderWidth"
                name="borderWidth"
                min="0"
                max="10"
                className="accent-orange cursor-pointer"
                value={localWindowManagerConfig.borderWidth}
                onChange={(e) => {
                  setLocalWindowManagerConfig((prev) => ({
                    ...prev,
                    borderWidth: parseInt(e.target.value),
                  }));
                }}
              />
            </div>

            {/* tiling */}
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="tiling"
                name="tiling"
                checked={localWindowManagerConfig.tiling}
                onChange={(e) => {
                  setLocalWindowManagerConfig((prev) => ({
                    ...prev,
                    tiling: e.target.checked,
                  }));
                }}
              />
              <label htmlFor="tiling">Tiling</label>
            </div>
          </div>
        </div>

        <DialogFooter>
          <button
            className="btn btn-primary"
            onClick={() => {
              setWindowManagerConfig(localWindowManagerConfig);
              setOpen(false);
            }}
          >
            Save
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
