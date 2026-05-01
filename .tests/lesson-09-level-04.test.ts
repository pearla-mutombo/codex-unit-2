import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 04 — Query params", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    doc = loadDocument(4, "lesson-09-public-apis");
    const scriptPath = path.join(
      process.cwd(),
      "lesson-09-public-apis",
      "level-04",
      "script.js",
    );
    if (fs.existsSync(scriptPath))
      scriptText = fs.readFileSync(scriptPath, "utf8");
  });

  it("reads form values and creates a data object (script)", () => {
    expect(
      /FormData\(|form\.elements|getElementById\(|querySelector\(/.test(
        scriptText,
      ),
    ).toBeTruthy();
  });

  it("uses URLSearchParams to serialize data", () => {
    expect(/URLSearchParams/.test(scriptText)).toBeTruthy();
  });

  it("appends the generated query string to a GET request URL", () => {
    expect(/\?\+|searchParams|toString\(\)/.test(scriptText)).toBeTruthy();
  });
});
