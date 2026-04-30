import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 14 — mini-project (form handler)", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(14, "lesson-07-browser-objects");
  });

  it("contains a form with inputs (name, message, range, radio, checkbox) and names", () => {
    const form = doc?.querySelector("form");
    expect(form).toBeTruthy();
    const required = [
      "input[name]",
      "textarea[name]",
      "input[type=range][name]",
      "input[type=radio][name]",
      "input[type=checkbox][name]",
    ];
    const exists = required.some((sel) => !!doc?.querySelector(sel));
    expect(exists).toBe(true);
  });

  it("includes code that prevents default, reads form.elements, displays summary, and calls reset", () => {
    const scripts = Array.from(doc?.querySelectorAll("script") ?? []).map(
      (s) => s.textContent ?? "",
    );
    const hasPrevent = scripts.some((t) => /preventDefault\s*\(/.test(t));
    const reads = scripts.some((t) => /form\.elements|FormData\(/.test(t));
    const displays = scripts.some((t) =>
      /innerText|innerHTML|textContent/.test(t),
    );
    const resets = scripts.some((t) => /\.reset\s*\(/.test(t));
    expect(hasPrevent && reads && displays && resets).toBe(true);
  });
});
