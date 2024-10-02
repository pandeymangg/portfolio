import { createId } from "@paralleldrive/cuid2";
import { Child, Root } from "../types";

export const getConfig = (
  components: { component: React.ReactNode; id: string }[]
): Root => {
  if (components.length === 1 || components.length === 2) {
    return {
      type: "root",
      id: createId(),
      leaves: components.map((component) => ({
        type: "child",
        id: component.id,
        component: component.component,
      })),
    };
  }

  return {
    type: "root",
    id: createId(),
    leaves: [
      {
        type: "child",
        id: components[0].id,
        component: components[0].component,
      },
      getConfig(components.slice(1)),
    ],
  };
};

export function addComponent(config: Root, newComponent: Child): Root {
  if (config.leaves.length === 0) {
    return {
      type: "root",
      id: createId(),
      leaves: [newComponent],
    };
  }

  if (config.leaves.length === 1) {
    return {
      ...config,
      leaves: [...config.leaves, newComponent],
    };
  }

  if (
    config.leaves.length === 2 &&
    config.leaves.every((leaf) => leaf.type === "child")
  ) {
    const [firstChild, secondChild] = config.leaves;

    const newRoot: Root = {
      type: "root",
      id: createId(),
      leaves: [secondChild, newComponent],
    };

    return {
      ...config,
      leaves: [firstChild, newRoot],
    };
  }

  return {
    ...config,
    leaves: config.leaves.map((leaf) => {
      if (leaf.type === "root") {
        return addComponent(leaf, newComponent);
      } else {
        return leaf;
      }
    }),
  };
}

export const removeComponent = (config: Root, id: string): Root | null => {
  if (config.leaves.length === 0) {
    return null;
  }

  if (config.leaves.length === 1) {
    const leaf = config.leaves[0];
    if (leaf.type === "child") {
      if (leaf.id === id) {
        return { ...config, leaves: [] };
      }
      return config;
    }
    if (leaf.type === "root") {
      const result = removeComponent(leaf, id);
      if (result === null) {
        return null;
      }
      if (result.leaves.length === 1) {
        return { ...config, leaves: result.leaves };
      }
      return { ...config, leaves: [result] };
    }
  }

  const newLeaves = config.leaves
    .map((leaf) => {
      if (leaf.type === "child") {
        return leaf.id === id ? null : leaf;
      }
      const result = removeComponent(leaf, id);
      if (result === null) {
        return null;
      }
      if (result.leaves.length === 1) {
        return result.leaves[0];
      }
      return result;
    })
    .filter((leaf) => leaf !== null);

  if (newLeaves.length === 0) {
    return null;
  }

  if (newLeaves.length === 1 && newLeaves[0].type === "root") {
    return newLeaves[0];
  }

  return { ...config, leaves: newLeaves };
};
