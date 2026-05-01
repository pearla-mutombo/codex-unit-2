import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 02 — Feedback Message", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    doc = loadDocument(2, "lesson-09-public-apis");
    const scriptPath = path.join(
      process.cwd(),
      "lesson-09-public-apis",
      "level-02",
      "script.js",
    );
    if (fs.existsSync(scriptPath))
      scriptText = fs.readFileSync(scriptPath, "utf8");
  });

  it('index.html contains an element with id="error"', () => {
    expect(doc!.querySelector("#error")).toBeTruthy();
  });

  it('index.html contains an element with id="success"', () => {
    expect(doc!.querySelector("#success")).toBeTruthy();
  });

  it("response is parsed into a result variable (script)", () => {
    expect(/\bresult\b|\bdata\b/.test(scriptText)).toBeTruthy();
  });

  it("error and success elements are selected and updated", () => {
    expect(
      /querySelector\(['\"]#error['\"]\)|getElementById\(['\"]error['\"]\)/.test(
        scriptText,
      ),
    ).toBeTruthy();
    expect(
      /querySelector\(['\"]#success['\"]\)|getElementById\(['\"]success['\"]\)/.test(
        scriptText,
      ),
    ).toBeTruthy();
  });

  it("form.reset() is called on successful login", () => {
    expect(/form\.reset\(|reset\(\)/.test(scriptText)).toBeTruthy();
  });
});
