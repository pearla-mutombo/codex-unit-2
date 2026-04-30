import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 06 — form object", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(6, "lesson-07-browser-objects");
  });

  it("finds a form element (by id or first form)", () => {
    const form =
      doc?.getElementById("sample-form") ?? doc?.querySelector("form");
    expect(form).toBeTruthy();
  });

  it("reads common form attributes if present", () => {
    const form = (doc?.getElementById("sample-form") ??
      doc?.querySelector("form")) as HTMLFormElement | null;
    expect(form).toBeTruthy();
    if (form) {
      const id = form.id ?? "";
      const name = form.name ?? "";
      const len = form.elements.length;
      const enctype = form.enctype ?? "";
      const cls = form.className ?? "";
      expect(typeof id).toBe("string");
      expect(typeof name).toBe("string");
      expect(typeof len).toBe("number");
      expect(typeof enctype).toBe("string");
      expect(typeof cls).toBe("string");
    }
  });
});
