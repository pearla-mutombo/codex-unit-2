import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 11 — Textarea and range values", () => {
  let doc: Document;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(11, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";

  beforeEach(() => {
    doc = loadDocument(11, "lesson-07-browser-objects");
  });

  test("The handler prevents the default form behavior.", () => {
    expectNonEmptyString(src);
    expect(/preventDefault\s*\(/.test(src)).toBeTruthy();
  });

  test("The values for `message` and `volume` from form.elements are saved into variables.", () => {
    expectNonEmptyString(src);
    expect(
      /form\.elements\.message\.value/.test(src) ||
        /\.elements\[\"message\"\]/.test(src),
    ).toBeTruthy();
    expect(
      /form\.elements\.volume\.value/.test(src) ||
        /\.elements\[\"volume\"\]/.test(src),
    ).toBeTruthy();
    // check that variables named message and volume exist
    expect(/\bmessage\b/.test(src)).toBeTruthy();
    expect(/\bvolume\b/.test(src)).toBeTruthy();
  });

  test("Convert the value of `volume` to a number.", () => {
    expectNonEmptyString(src);
    expect(
      /Number\s*\(\s*.*volume.*\)/.test(src) ||
        /Number\s*\(\s*volume\s*\)/.test(src),
    ).toBeTruthy();
  });

  test("Log the message and volume.", () => {
    expectNonEmptyString(src);
    expect(
      /console\.log\s*\(.*message.*\)/.test(src) &&
        /console\.log\s*\(.*volume.*\)/.test(src),
    ).toBeTruthy();
  });
});
