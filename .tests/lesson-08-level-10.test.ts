import { readFileSync } from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Level 10 — Display response data", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-10",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
    const scriptPath = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-10",
      "script.js",
    );
    if (require("fs").existsSync(scriptPath))
      scriptText = readFileSync(scriptPath, "utf8");
  });

  it("script stringifies data, posts it, and parses JSON response", () => {
    expect(scriptText.length).toBeGreaterThan(0);
    expect(/JSON\.stringify\s*\(/i.test(scriptText)).toBeTruthy();
    expect(/method\s*:\s*["']POST["']/i.test(scriptText)).toBeTruthy();
    expect(/\.json\s*\(/i.test(scriptText)).toBeTruthy();
  });

  it("page contains placeholders for response values (at least one present)", () => {
    const bodyText = doc?.body?.textContent ?? "";
    const hasPlaceholders = /username|email|\bid\b|product|name/i.test(
      bodyText,
    );
    expect(hasPlaceholders).toBeTruthy();
  });
});
