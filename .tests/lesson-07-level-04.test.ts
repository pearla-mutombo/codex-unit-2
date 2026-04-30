import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 04 — innerHTML", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(4, "lesson-07-browser-objects");
  });

  it("selects the element with id 'content' and its innerHTML mentions 'innerHTML' or contains markup", () => {
    const el = doc?.getElementById("content");
    expect(el).toBeTruthy();
    const html = el!.innerHTML ?? "";
    expect(typeof html).toBe("string");
    expect(/innerHTML/i.test(html) || /<\w+/.test(html)).toBe(true);
  });
});
