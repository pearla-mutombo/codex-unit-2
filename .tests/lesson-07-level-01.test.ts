import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 01 — Document object", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(1, "lesson-07-browser-objects");
  });

  it("exposes a non-empty document.title", () => {
    const t = doc?.title ?? "";
    expect(typeof t).toBe("string");
    expect(t.trim().length).toBeGreaterThan(0);
  });

  it("has a document.URL present", () => {
    const url = (doc as any)?.URL ?? (doc as any)?.location?.href ?? "";
    expect(typeof url).toBe("string");
    expect(url.length).toBeGreaterThan(0);
  });

  it("reports a contentType and has scripts/styleSheets collections", () => {
    const ct = (doc as any)?.contentType ?? "";
    expect(typeof ct).toBe("string");
    const scripts = doc?.scripts;
    const styles = doc?.styleSheets;
    expect(scripts).toBeTruthy();
    expect(styles).toBeTruthy();
  });
});
