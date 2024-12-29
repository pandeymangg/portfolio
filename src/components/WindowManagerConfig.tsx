import React, { useCallback, useMemo, useState } from "react";
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
import { Switch } from "./ui/switch";
import { ColorPicker } from "./ui/color-picker";

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

  const onColorChange = useCallback(
    (color: string, type: "activeBorderColor" | "inactiveBorderColor") => {
      const newColor = theme === "dark" ? { dark: color } : { light: color };
      setLocalWindowManagerConfig((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          ...newColor,
        },
      }));
    },
    [theme]
  );

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
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {/* border radius */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="borderRadius">Border radius</label>
                <span className="text-xs text-textSecondary">
                  Change the border radius of the windows
                </span>
              </div>

              <div className="border border-borderPrimary rounded-md p-2">
                <input
                  type="range"
                  id="borderRadius"
                  name="borderRadius"
                  min="0"
                  max="50"
                  className="accent-orange cursor-pointer w-full"
                  value={localWindowManagerConfig.borderRadius}
                  onChange={(e) =>
                    setLocalWindowManagerConfig((prev) => ({
                      ...prev,
                      borderRadius: parseInt(e.target.value),
                    }))
                  }
                />
              </div>
            </div>

            {/* gap */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="gap">Gap</label>

                <span className="text-xs text-textSecondary">
                  Change the gap between windows
                </span>
              </div>
              <div className="border border-borderPrimary rounded-md p-2">
                <input
                  type="range"
                  id="gap"
                  name="gap"
                  min="0"
                  max="50"
                  className="accent-orange cursor-pointer w-full"
                  value={localWindowManagerConfig.gap}
                  onChange={(e) => {
                    setLocalWindowManagerConfig((prev) => ({
                      ...prev,
                      gap: parseInt(e.target.value),
                    }));
                  }}
                />
              </div>
            </div>

            {/* active border color */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="activeBorderColor">Active border color</label>
                <span className="text-xs text-textSecondary">
                  Change the color of the active window border
                </span>
              </div>
              <ColorPicker
                color={activeBorderColor}
                onChange={(color) => {
                  onColorChange(color, "activeBorderColor");
                }}
              />
            </div>

            {/* inactive border color */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="inactiveBorderColor">
                  Inactive border color
                </label>
                <span className="text-xs text-textSecondary">
                  Change the color of the inactive window border
                </span>
              </div>
              <ColorPicker
                color={inactiveBorderColor}
                onChange={(color) => {
                  onColorChange(color, "inactiveBorderColor");
                }}
              />
            </div>

            {/* border width */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="borderWidth">Border width</label>
                <span className="text-xs text-textSecondary">
                  Change the border width of the windows
                </span>
              </div>

              <div className="border border-borderPrimary rounded-md p-2 w-full">
                <input
                  type="range"
                  id="borderWidth"
                  name="borderWidth"
                  min="0"
                  max="10"
                  className="accent-orange cursor-pointer w-full"
                  value={localWindowManagerConfig.borderWidth}
                  onChange={(e) => {
                    setLocalWindowManagerConfig((prev) => ({
                      ...prev,
                      borderWidth: parseInt(e.target.value),
                    }));
                  }}
                />
              </div>
            </div>

            {/* tiling */}
            <div className="flex gap-2 items-center">
              <Switch
                checked={localWindowManagerConfig.tiling}
                onCheckedChange={(checked) => {
                  setLocalWindowManagerConfig((prev) => ({
                    ...prev,
                    tiling: checked,
                  }));
                }}
              />
              <div className="flex flex-col">
                <label htmlFor="tiling">Tiling</label>
                <span className="text-xs text-textSecondary">
                  Enable or disable tiling
                </span>
              </div>
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
