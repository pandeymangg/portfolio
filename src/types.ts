import { DEFAULT_WINDOW_MANAGER_CONFIG } from "./lib/wmConfig";

export type Child = {
  type: "child";
  id: string;
  component: React.ReactNode;
};

export type Root = {
  type: "root";
  id: string;
  leaves: Array<Child | Root>;
};

export type TabItem = {
  id: string;
  label: string;
};

export type TWindowManagerConfig = typeof DEFAULT_WINDOW_MANAGER_CONFIG;

export type TFloatingConfig = {
  id: string;
  position: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
  isOpen?: boolean;
};
