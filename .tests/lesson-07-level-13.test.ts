import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 13 — Form reset", () => {
  let doc: Document;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(13, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";

  beforeEach(() => {
    doc = loadDocument(13, "lesson-07-browser-objects");
  });

  test("The handler prevents the default form behavior.", () => {
    expectNonEmptyString(src);
    expect(/preventDefault\s*\(/.test(src)).toBeTruthy();
  });

  test("The event target is saved into a `form` variable.", () => {
    expectNonEmptyString(src);
    expect(/const\s+form\s*=\s*event\.target/.test(src) || /form\s*=\s*event\.target/.test(src)).toBeTruthy();
  });

  test("An `if` statement checks `firstName`", () => {
    expectNonEmptyString(src);
    expect(/if\s*\(.*firstName.*\)/.test(src) || /firstName\s*==|===/.test(src)).toBeTruthy();
  });

  test("An `else if` statement checks `lastName`", () => {
    expectNonEmptyString(src);
    expect(/else\s*if\s*\(.*lastName.*\)/.test(src) || /else\s+if.*lastName/.test(src)).toBeTruthy();
  });

  test("Reset the form when a condition is true.", () => {
    expectNonEmptyString(src);
    expect(/form\.reset\s*\(/.test(src)).toBeTruthy();
  });
});
