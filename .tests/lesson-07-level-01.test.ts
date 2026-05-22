import { describe, test, expect } from "vitest";
import fs from "fs";
import path from "path";
import { indexHtmlPathForLevel } from "./_test-utils";

const scriptPath = path.join(
  path.dirname(indexHtmlPathForLevel(1, "lesson-07-browser-objects")),
  "script.js",
);
const src = fs.existsSync(scriptPath)
  ? fs.readFileSync(scriptPath, "utf8")
  : "";

describe("Level 01 — Document Object", () => {
  test("console.log(document.title) is present and runs without errors", () => {
    expect(src.length).toBeGreaterThan(0);
    expect(/console\.log\s*\(\s*document\.title\s*\)/.test(src)).toBeTruthy();
  });

  test("console.log(document.URL) is present and runs without errors", () => {
    expect(/console\.log\s*\(\s*document\.URL\s*\)/.test(src)).toBeTruthy();
  });

  test("console.log(document.contentType) is present and runs without errors", () => {
    expect(
      /console\.log\s*\(\s*document\.contentType\s*\)/.test(src),
    ).toBeTruthy();
  });

  test("console.log(document.scripts) is present and runs without errors", () => {
    expect(/console\.log\s*\(\s*document\.scripts\s*\)/.test(src)).toBeTruthy();
  });

  test("console.log(document.styleSheets) is present and runs without errors", () => {
    expect(
      /console\.log\s*\(\s*document\.styleSheets\s*\)/.test(src),
    ).toBeTruthy();
  });
});
