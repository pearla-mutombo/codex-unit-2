import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 01 — Login API", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    doc = loadDocument(1, "lesson-09-public-apis");
    const scriptPath = path.join(
      process.cwd(),
      "lesson-09-public-apis",
      "level-01",
      "script.js",
    );
    if (fs.existsSync(scriptPath))
      scriptText = fs.readFileSync(scriptPath, "utf8");
  });

  it("loads the page DOM", () => {
    expect(doc).toBeTruthy();
  });

  it("contains a form element", () => {
    expect(doc!.querySelector("form")).toBeTruthy();
  });

  it("includes a script tag with defer", () => {
    const script = doc!.querySelector("script[src]");
    expect(script).toBeTruthy();
    expect(script!.hasAttribute("defer")).toBeTruthy();
  });

  it("submit handler calls event.preventDefault() and builds a data object", () => {
    expect(/preventDefault\(|preventDefault\s*;/.test(scriptText)).toBeTruthy();
    expect(/\bdata\b/.test(scriptText)).toBeTruthy();
  });

  it("uses fetch with async/await to POST and includes JSON headers", () => {
    expect(/fetch\(/.test(scriptText)).toBeTruthy();
    expect(
      /await\s+fetch|await\s+response|async\s+function|async\s*\(/.test(
        scriptText,
      ),
    ).toBeTruthy();
    expect(
      /Content-Type\s*:\s*['\"]application\/json['\"]|application\/json/.test(
        scriptText,
      ),
    ).toBeTruthy();
    expect(/JSON\.stringify\(/.test(scriptText)).toBeTruthy();
  });
});
