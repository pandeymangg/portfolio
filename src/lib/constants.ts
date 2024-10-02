import { createId } from "@paralleldrive/cuid2";
import { Root } from "../types";

export const INITIAL_CONFIG: Root = {
  type: "root",
  id: createId(),
  leaves: [],
};
