import { describe, it, expect, beforeEach } from "vitest";
import {
  loadDocument,
  expectArrayIncludesToken,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 02 — getElementById", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(2, "lesson-07-browser-objects");
  });

  it("selects an element with id 'sample'", () => {
    const el = doc?.getElementById("sample");
    expect(el).toBeTruthy();
    expect(el?.id).toBe("sample");
  });

  it("element has class 'note' and non-empty text/html", () => {
    const el = doc?.getElementById("sample");
    expect(el).toBeTruthy();
    const cls = Array.from(el!.classList ?? []);
    expect(cls.includes("note")).toBe(true);
    expectNonEmptyString(el!.textContent ?? "");
    expectNonEmptyString(el!.innerHTML ?? "");
  });

  it("attributes collection contains id and class", () => {
    const el = doc?.getElementById("sample");
    expect(el).toBeTruthy();
    const attrs = el!.attributes;
    expect(attrs.getNamedItem("id")).toBeTruthy();
    expect(attrs.getNamedItem("class")).toBeTruthy();
  });
});
