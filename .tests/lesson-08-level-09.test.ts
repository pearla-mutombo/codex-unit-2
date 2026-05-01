import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 09 — GET vs POST", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(9, "lesson-08-rest-api");
  });

  it("contains explanatory text comparing GET and POST", () => {
    const bodyText = doc?.body?.textContent ?? "";
    const hasComparison =
      /\bGET\b/i.test(bodyText) && /\bPOST\b/i.test(bodyText);
    expect(hasComparison).toBe(true);
  });
});
