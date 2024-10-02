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
