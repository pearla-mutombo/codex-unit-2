import { readFileSync } from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Level 03 — Intro to async / await", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-03",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
    const scriptPath = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-03",
      "script.js",
    );
    if (require("fs").existsSync(scriptPath))
      scriptText = readFileSync(scriptPath, "utf8");
  });

  it("contains a form element", () => {
    expect(doc!.querySelector("form")).toBeTruthy();
  });
  it("gets and saves the form element to form and attaches a submit handler", () => {
    expect(scriptText.length).toBeGreaterThan(0);
    const hasFormVar =
      /(?:const|let|var)\s+form\s*=/.test(scriptText) ||
      /form\s*=\s*document\./i.test(scriptText);
    const attachesOnsubmit =
      /form\.onsubmit\s*=/.test(scriptText) ||
      /addEventListener\s*\(\s*["']submit["']/.test(scriptText);
    expect(hasFormVar).toBeTruthy();
    expect(attachesOnsubmit).toBeTruthy();
  });

  it("the submit handler calls event.preventDefault()", () => {
    expect(/preventDefault\s*\(/i.test(scriptText)).toBeTruthy();
  });

  it("uses async/await when calling fetch inside the handler", () => {
    expect(
      /await\s+fetch/i.test(scriptText) ||
        /async\s+function/i.test(scriptText) ||
        /=>\s*async/i.test(scriptText),
    ).toBeTruthy();
  });

  it("inserts a short explanation about async/await into an element's innerText", () => {
    const bodyText = doc?.body?.textContent ?? "";
    const explains = /async|await|asynchronous/i.test(bodyText);
    expect(explains).toBeTruthy();
  });
});
