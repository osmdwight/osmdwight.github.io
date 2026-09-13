import { describe, expect, it } from "vitest";

import { bentoFeatures, calculateBentoCells } from "./site";

describe("Gomatic content structure", () => {
  it("fills the complete 12-column, two-row feature grid", () => {
    expect(calculateBentoCells(bentoFeatures)).toBe(24);
  });

  it("keeps every feature within the grid bounds", () => {
    expect(bentoFeatures.every((feature) => feature.columns <= 12)).toBe(true);
    expect(bentoFeatures.every((feature) => feature.rows <= 2)).toBe(true);
  });
});
