import { readFileSync } from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Level 04 — Parsing the response", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-04",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
    const scriptPath = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-04",
      "script.js",
    );
    if (require("fs").existsSync(scriptPath))
      scriptText = readFileSync(scriptPath, "utf8");
  });

  it("uses fetch and parses JSON via response.json", () => {
    expect(scriptText.length).toBeGreaterThan(0);
    expect(/fetch\s*\(/i.test(scriptText)).toBeTruthy();
    expect(/\.json\s*\(/i.test(scriptText)).toBeTruthy();
  });

  it("contains a form element", () => {
    expect(doc!.querySelector("form")).toBeTruthy();
  });
});
