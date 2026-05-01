import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 03 — Error handling", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    doc = loadDocument(3, "lesson-09-public-apis");
    const scriptPath = path.join(
      process.cwd(),
      "lesson-09-public-apis",
      "level-03",
      "script.js",
    );
    if (fs.existsSync(scriptPath))
      scriptText = fs.readFileSync(scriptPath, "utf8");
  });

  it("wraps fetch calls in try/catch", () => {
    expect(/try\s*\{[^}]*fetch\(|try\s*\{/.test(scriptText)).toBeTruthy();
    expect(/catch\s*\(/.test(scriptText)).toBeTruthy();
  });

  it("detects non-2xx responses using response.ok", () => {
    expect(/response\.ok/.test(scriptText)).toBeTruthy();
  });

  it("on error writes a message to the error element", () => {
    expect(
      /#error|errorElement|querySelector\(['\"]#error['\"]\)/.test(scriptText),
    ).toBeTruthy();
    expect(/textContent\s*=|innerText\s*=/.test(scriptText)).toBeTruthy();
  });
});
