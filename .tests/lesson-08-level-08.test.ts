import { readFileSync } from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Level 08 — Send form data with POST", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-08",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
    const scriptPath = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-08",
      "script.js",
    );
    if (require("fs").existsSync(scriptPath))
      scriptText = readFileSync(scriptPath, "utf8");
  });

  it("form inputs include name attributes", () => {
    const inputs = Array.from(doc!.querySelectorAll("input, textarea, select"));
    const hasNamed = inputs.some((i) => i.getAttribute("name"));
    expect(hasNamed).toBeTruthy();
  });

  it("script stringifies the data and sends POST", () => {
    expect(scriptText.length).toBeGreaterThan(0);
    expect(/JSON\.stringify\s*\(/i.test(scriptText)).toBeTruthy();
    expect(/method\s*:\s*["']POST["']/i.test(scriptText)).toBeTruthy();
  });
});
