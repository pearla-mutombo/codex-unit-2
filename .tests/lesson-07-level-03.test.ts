import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 03 — innerText", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(3, "lesson-07-browser-objects");
  });

  it("selects the element with id 'desc' and has innerText mentioning 'innerText'", () => {
    const el = doc?.getElementById("desc");
    expect(el).toBeTruthy();
    const txt = el!.textContent ?? "";
    expect(typeof txt).toBe("string");
    expect(/innerText/i.test(txt)).toBe(true);
  });
});
