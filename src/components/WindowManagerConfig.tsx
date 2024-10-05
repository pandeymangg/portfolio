import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { TWindowManagerConfig } from "@/types";

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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-textPrimary bg-bgSecondary border border-borderPrimary fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <DialogHeader>
          <DialogTitle className="text-textPrimary">
            Window manager Configuration
          </DialogTitle>
          <DialogDescription className="text-textPrimary">
            Configure the appearance of the Window manager
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          {/* border radius */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="borderRadius">Border radius</label>
              <input
                type="range"
                id="borderRadius"
                name="borderRadius"
                min="0"
                max="50"
                className="accent-orange"
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
                className="accent-orange"
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
                value={localWindowManagerConfig.activeBorderColor}
                onChange={(e) =>
                  setLocalWindowManagerConfig((prev) => ({
                    ...prev,
                    activeBorderColor: e.target.value,
                  }))
                }
              />
            </div>

            {/* inactive border color */}
            <div className="flex flex-col gap-2">
              <label htmlFor="inactiveBorderColor">Inactive border color</label>
              <input
                type="color"
                id="inactiveBorderColor"
                name="inactiveBorderColor"
                value={localWindowManagerConfig.inactiveBorderColor}
                onChange={(e) =>
                  setLocalWindowManagerConfig((prev) => ({
                    ...prev,
                    inactiveBorderColor: e.target.value,
                  }))
                }
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
                className="accent-orange"
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
