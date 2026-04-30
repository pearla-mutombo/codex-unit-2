import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 05 — querySelector", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(5, "lesson-07-browser-objects");
  });

  it("selects with document.querySelector('#content')", () => {
    const el = doc?.querySelector("#content");
    expect(el).toBeTruthy();
  });

  it("updates mention of innerText/innerHTML in content", () => {
    const el = doc?.querySelector("#content");
    expect(el).toBeTruthy();
    const txt = (el!.textContent ?? "") + (el!.innerHTML ?? "");
    expect(/innerText|innerHTML/i.test(txt)).toBe(true);
  });
});
