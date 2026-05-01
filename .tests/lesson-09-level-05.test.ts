import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 05 — Trivia API", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    doc = loadDocument(5, "lesson-09-public-apis");
    const scriptPath = path.join(
      process.cwd(),
      "lesson-09-public-apis",
      "level-05",
      "script.js",
    );
    if (fs.existsSync(scriptPath))
      scriptText = fs.readFileSync(scriptPath, "utf8");
  });

  it("builds query parameters and stores them in a variable", () => {
    expect(
      /URLSearchParams|queryParams|query\s*=/.test(scriptText),
    ).toBeTruthy();
  });

  it("uses fetch with async/await to call the trivia endpoint", () => {
    expect(/fetch\(/.test(scriptText)).toBeTruthy();
    expect(
      /await\s+fetch|async\s+function|async\s*\(/.test(scriptText),
    ).toBeTruthy();
  });

  it("parses the response and displays the first question text", () => {
    expect(
      /response\.json\(|result\[0\]|question/.test(scriptText),
    ).toBeTruthy();
  });
});
