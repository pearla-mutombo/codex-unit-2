import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 14 — Mini project: Build a small form handler", () => {
  let doc: Document;
  const htmlPath = indexHtmlPathForLevel(14, "lesson-07-browser-objects");
  const levelDir = path.dirname(htmlPath);
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";
  const html = fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath, "utf8") : "";

  beforeEach(() => {
    doc = loadDocument(14, "lesson-07-browser-objects");
  });

  test("Form inputs each have a `name` attribute in HTML", () => {
    expect(/<input[^>]+name="[^"]+"/i.test(html)).toBeTruthy();
  });

  test("The handler prevents the default form behavior.", () => {
    expectNonEmptyString(src);
    expect(/preventDefault\s*\(/.test(src)).toBeTruthy();
  });

  test("The event target is saved into a `form` variable.", () => {
    expectNonEmptyString(src);
    expect(/const\s+form\s*=\s*event\.target/.test(src) || /form\s*=\s*event\.target/.test(src)).toBeTruthy();
  });

  test("Read values from form.elements and save them into variables", () => {
    expectNonEmptyString(src);
    expect(
      /form\.elements\.[a-zA-Z0-9_]+\.value/.test(src) || /form\.elements\[/.test(src),
    ).toBeTruthy();
  });

  test("An if condition determines when to reset the form", () => {
    expectNonEmptyString(src);
    expect(/if\s*\(.*\)/.test(src) && /form\.reset\s*\(/.test(src)).toBeTruthy();
  });
});
