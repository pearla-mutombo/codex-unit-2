import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 06 — Trivia Feedback", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    doc = loadDocument(6, "lesson-09-public-apis");
    const scriptPath = path.join(
      process.cwd(),
      "lesson-09-public-apis",
      "level-06",
      "script.js",
    );
    if (fs.existsSync(scriptPath))
      scriptText = fs.readFileSync(scriptPath, "utf8");
  });

  it("saves the first question text to a question variable", () => {
    expect(
      /question\s*=|result\[0\].*question|firstQuestion/.test(scriptText),
    ).toBeTruthy();
  });

  it("stores correct and incorrect answers in separate variables that start with 'choice'", () => {
    const matches =
      scriptText.match(/(?:const|let|var)\s+(choice\w*)\s*=/g) || [];
    expect(matches.length).toBeGreaterThanOrEqual(2);
  });

  it("fetches questions using fetch with async/await", () => {
    expect(/fetch\(/.test(scriptText)).toBeTruthy();
    expect(
      /await\s+fetch|async\s+function|async\s*\(/.test(scriptText),
    ).toBeTruthy();
  });

  it("renders question and choices into the DOM", () => {
    expect(
      /(innerText|innerHTML|textContent|appendChild)/.test(scriptText),
    ).toBeTruthy();
  });
});
