import { readFileSync } from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Level 11 — Apply what you learned", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-11",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
    const scriptPath = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-11",
      "script.js",
    );
    if (require("fs").existsSync(scriptPath))
      scriptText = readFileSync(scriptPath, "utf8");
  });

  it("index.html has a form with three named inputs", () => {
    const inputs = Array.from(doc!.querySelectorAll("input, textarea, select"));
    const named = inputs.filter((i) => i.getAttribute("name"));
    expect(named.length).toBeGreaterThanOrEqual(3);
  });

  it("script posts to products endpoint, stringifies data, and parses response", () => {
    expect(scriptText.length).toBeGreaterThan(0);
    expect(/products/i.test(scriptText)).toBeTruthy();
    expect(/JSON\.stringify\s*\(/i.test(scriptText)).toBeTruthy();
    expect(/fetch\s*\(/i.test(scriptText)).toBeTruthy();
    expect(/\.json\s*\(/i.test(scriptText)).toBeTruthy();
  });
});
