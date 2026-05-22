import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 12 — Radio and Checkbox", () => {
  let doc: Document;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(12, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";

  beforeEach(() => {
    doc = loadDocument(12, "lesson-07-browser-objects");
  });

  test("The handler prevents the default form behavior.", () => {
    expectNonEmptyString(src);
    expect(/preventDefault\s*\(/.test(src)).toBeTruthy();
  });

  test("The color from the form is saved into the `color` variable.", () => {
    expectNonEmptyString(src);
    expect(
      /form\.elements\.color\.value/.test(src) ||
        /\.elements\[\"color\"\]/.test(src),
    ).toBeTruthy();
    expect(/\bcolor\b/.test(src)).toBeTruthy();
  });

  test("The checkbox status is saved into the `isSubscribed` variable.", () => {
    expectNonEmptyString(src);
    expect(
      /form\.elements\.subscribe\.checked/.test(src) ||
        /\.elements\[\"subscribe\"\]/.test(src),
    ).toBeTruthy();
    expect(/\bisSubscribed\b/.test(src)).toBeTruthy();
  });

  test("Log the color and checkbox status.", () => {
    expectNonEmptyString(src);
    expect(
      /console\.log\s*\(.*color.*\)/.test(src) &&
        /console\.log\s*\(.*isSubscribed.*\)/.test(src),
    ).toBeTruthy();
  });
});
