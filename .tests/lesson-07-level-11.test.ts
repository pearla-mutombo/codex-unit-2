import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 11 — textarea & range", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(11, "lesson-07-browser-objects");
  });

  it("has textarea and range inputs with name attributes and code converts range with Number()", () => {
    const textarea = doc?.querySelector("textarea[name]");
    const range = doc?.querySelector("input[type=range][name]");
    expect(textarea).toBeTruthy();
    expect(range).toBeTruthy();
    const scripts = Array.from(doc?.querySelectorAll("script") ?? []).map(
      (s) => s.textContent ?? "",
    );
    const converts = scripts.some(
      (t) => /Number\s*\(/.test(t) && /\.value/.test(t),
    );
    expect(converts).toBe(true);
  });
});
