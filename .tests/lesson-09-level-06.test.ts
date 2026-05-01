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

  it("builds a choices array containing correct and incorrect answers", () => {
    expect(/incorrect|correct|choices/.test(scriptText)).toBeTruthy();
  });

  it("wires click handlers for choices", () => {
    expect(
      /addEventListener\(|onclick|click\s*=>/.test(scriptText),
    ).toBeTruthy();
  });
});
