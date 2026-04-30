import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 07 — onsubmit function", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(7, "lesson-07-browser-objects");
  });

  it("has a form with an onsubmit attribute or script that assigns onsubmit", () => {
    const form = doc?.querySelector("form");
    const hasAttr = !!form?.getAttribute("onsubmit");
    const scripts = Array.from(doc?.querySelectorAll("script") ?? []).map(
      (s) => s.textContent ?? "",
    );
    const assigns = scripts.some((t) => /onsubmit\s*=|\.onsubmit\s*=/.test(t));
    expect(hasAttr || assigns).toBe(true);
  });

  it("includes a console.log mentioning onsubmit in scripts or inline attribute", () => {
    const scripts = Array.from(doc?.querySelectorAll("script") ?? []).map(
      (s) => s.textContent ?? "",
    );
    const found = scripts.some(
      (t) => /onsubmit/i.test(t) && /console\.log\(/i.test(t),
    );
    const form = doc?.querySelector("form");
    const attr = form?.getAttribute("onsubmit") ?? "";
    expect(found || /onsubmit/i.test(attr)).toBe(true);
  });
});
