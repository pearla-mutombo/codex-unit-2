import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 12 — radio & checkbox", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(12, "lesson-07-browser-objects");
  });

  it("contains radio and checkbox inputs with name attributes and scripts reading their values", () => {
    const radios = Array.from(
      doc?.querySelectorAll("input[type=radio][name]") ?? [],
    );
    const checks = Array.from(
      doc?.querySelectorAll("input[type=checkbox][name]") ?? [],
    );
    expect(radios.length + checks.length).toBeGreaterThan(0);
    const scripts = Array.from(doc?.querySelectorAll("script") ?? []).map(
      (s) => s.textContent ?? "",
    );
    const reads = scripts.some((t) =>
      /(\.checked|form\.elements\.|FormData\()/i.test(t),
    );
    expect(reads).toBe(true);
  });
});
