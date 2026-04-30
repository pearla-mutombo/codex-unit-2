import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 10 — form.elements", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(10, "lesson-07-browser-objects");
  });

  it("includes form inputs with name attributes and code referencing form.elements", () => {
    const inputs = Array.from(
      doc?.querySelectorAll("input[name], textarea[name], select[name]") ?? [],
    );
    expect(inputs.length).toBeGreaterThan(0);
    const scripts = Array.from(doc?.querySelectorAll("script") ?? []).map(
      (s) => s.textContent ?? "",
    );
    const refs = scripts.some((t) => /form\.elements/.test(t));
    expect(refs).toBe(true);
  });
});
