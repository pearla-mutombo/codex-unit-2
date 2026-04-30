import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 13 — form.reset", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(13, "lesson-07-browser-objects");
  });

  it("includes a submit handler that calls form.reset() or mentions reset", () => {
    const scripts = Array.from(doc?.querySelectorAll("script") ?? []).map(
      (s) => s.textContent ?? "",
    );
    const mentions = scripts.some((t) => /\.reset\s*\(|form\.reset/.test(t));
    expect(mentions).toBe(true);
  });
});
