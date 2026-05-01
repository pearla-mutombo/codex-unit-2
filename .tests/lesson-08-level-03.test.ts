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

  it("script uses async/await and fetch", () => {
    expect(scriptText.length).toBeGreaterThan(0);
    expect(/\basync\b/i.test(scriptText)).toBeTruthy();
    expect(/\bawait\b/i.test(scriptText)).toBeTruthy();
    expect(/fetch\s*\(/i.test(scriptText)).toBeTruthy();
  });
});
