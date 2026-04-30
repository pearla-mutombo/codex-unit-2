import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 08 — preventDefault", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(8, "lesson-07-browser-objects");
  });

  it("includes code that calls event.preventDefault() in a submit handler or inline onsubmit", () => {
    const scripts = Array.from(doc?.querySelectorAll("script") ?? []).map(
      (s) => s.textContent ?? "",
    );
    const hasPrevent = scripts.some((t) => /preventDefault\s*\(/.test(t));
    const formAttr = doc?.querySelector("form")?.getAttribute("onsubmit") ?? "";
    expect(hasPrevent || /preventDefault\s*\(/.test(formAttr)).toBe(true);
  });
});
