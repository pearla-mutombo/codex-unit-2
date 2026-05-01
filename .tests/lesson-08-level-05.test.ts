import { readFileSync } from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Level 05 — Display the data", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-05",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
    const scriptPath = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-05",
      "script.js",
    );
    if (require("fs").existsSync(scriptPath))
      scriptText = readFileSync(scriptPath, "utf8");
  });

  it("script references username, email, or id tokens and parses JSON", () => {
    expect(scriptText.length).toBeGreaterThan(0);
    const hasKeys = /username|email|\bid\b/i.test(scriptText);
    expect(hasKeys).toBeTruthy();
    expect(/\.json\s*\(/i.test(scriptText)).toBeTruthy();
  });

  it("page contains placeholders or elements to show data (at least one present)", () => {
    const bodyText = doc?.body?.textContent ?? "";
    const hasPlaceholders = /username|email|\bid\b/i.test(bodyText);
    expect(hasPlaceholders).toBeTruthy();
  });
});
