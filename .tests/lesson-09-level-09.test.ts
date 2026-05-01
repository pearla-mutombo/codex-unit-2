import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 09 — Challenge", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    doc = loadDocument(9, "lesson-09-public-apis");
    const scriptPath = path.join(
      process.cwd(),
      "lesson-09-public-apis",
      "level-09",
      "script.js",
    );
    if (fs.existsSync(scriptPath))
      scriptText = fs.readFileSync(scriptPath, "utf8");
  });

  it("has a form that collects at least one search or filter input", () => {
    const form = doc!.querySelector("form");
    expect(form).toBeTruthy();
    expect(form!.querySelector("input, select, textarea")).toBeTruthy();
  });

  it("submit handler prevents default and constructs request URL/body", () => {
    expect(/preventDefault\(|preventDefault\s*;/.test(scriptText)).toBeTruthy();
    expect(
      /fetch\(|URLSearchParams|JSON\.stringify\(|new\s+URL\(|body:/.test(
        scriptText,
      ),
    ).toBeTruthy();
  });

  it("parses JSON responses and renders results", () => {
    expect(/response\.json\(|fetch\(/.test(scriptText)).toBeTruthy();
    expect(
      /render|appendChild|textContent|innerText/.test(scriptText),
    ).toBeTruthy();
  });

  it("shows errors to the user and includes pagination controls when present", () => {
    expect(/error|response\.ok|catch\s*\(/.test(scriptText)).toBeTruthy();
    expect(/page|pagination|next|prev|previous/.test(scriptText)).toBeTruthy();
  });
});
