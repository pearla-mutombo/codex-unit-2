import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 09 — event.target", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(9, "lesson-07-browser-objects");
  });

  it("contains a submit handler that references event.target or uses currentTarget", () => {
    const scripts = Array.from(doc?.querySelectorAll("script") ?? []).map(
      (s) => s.textContent ?? "",
    );
    const usesTarget = scripts.some((t) =>
      /event\.target|event\.currentTarget|const\s+form\s*=\s*event\.target/.test(
        t,
      ),
    );
    expect(usesTarget).toBe(true);
  });
});
