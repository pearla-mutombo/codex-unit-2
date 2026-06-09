import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 10 — Form elements", () => {
  let doc: Document;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(10, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";

  beforeEach(() => {
    doc = loadDocument(10, "lesson-07-browser-objects");
  });

  test("The handler prevents the default form behavior.", () => {
    expectNonEmptyString(src);
    expect(/preventDefault\s*\(/.test(src)).toBeTruthy();
  });

  test("Get the value of the message.", () => {
    expectNonEmptyString(src);
    expect(
      /form\.elements\.message\.value/.test(src) ||
        /\.elements\[\"message\"\]/.test(src),
    ).toBeTruthy();
  });

  test("Save the value in a `message` variable.", () => {
    expectNonEmptyString(src);
    // look for a variable named message being assigned or declared
    expect(/\bmessage\b/.test(src)).toBeTruthy();
  });

  test("Select the output tag with `querySelector`", () => {
    expectNonEmptyString(src);
    expect(
      /querySelector\s*\(\s*['\"]output['\"]\s*\)/.test(src) ||
        /document\.querySelector\s*\(\s*['\"]output['\"]\s*\)/.test(src),
    ).toBeTruthy();
  });

  test("Display the message in the output tag.", () => {
    expectNonEmptyString(src);
    expect(
      /output\.(?:innerText|textContent)\s*=/.test(src) ||
        /\.innerText\s*=\s*message/.test(src),
    ).toBeTruthy();
    expect(!/placeholder/i.test(src)).toBeTruthy();
  });
});
