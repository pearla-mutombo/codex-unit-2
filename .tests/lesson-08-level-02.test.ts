import { readFileSync } from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Level 02 — Using fetch", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-02",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
    const scriptPath = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-02",
      "script.js",
    );
    if (require("fs").existsSync(scriptPath))
      scriptText = readFileSync(scriptPath, "utf8");
  });

  it("contains a form element", () => {
    expect(doc!.querySelector("form")).toBeTruthy();
  });

  it("form contains at least one input and a submit control", () => {
    const form = doc!.querySelector("form");
    expect(form).toBeTruthy();
    expect(form!.querySelector("input")).toBeTruthy();
    expect(
      doc!.querySelector('button[type="submit"], input[type="submit"], button'),
    ).toBeTruthy();
  });

  it("includes a script file and uses fetch and preventDefault in the handler", () => {
    expect(scriptText.length).toBeGreaterThan(0);
    expect(/fetch\s*\(|fetch\s+\(/i.test(scriptText)).toBeTruthy();
    expect(/preventDefault\(/i.test(scriptText)).toBeTruthy();
  });
});
