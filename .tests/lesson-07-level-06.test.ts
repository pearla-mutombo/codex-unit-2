import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 06 — Form Object", () => {
  let doc: Document;
  let form: HTMLFormElement | null;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(6, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";

  beforeEach(() => {
    doc = loadDocument(6, "lesson-07-browser-objects");
    form = doc.querySelector("#sample-form");
  });

  test("Form 'sample-form' is selected", () => {
    expect(form).toBeTruthy();
  });

  test("The variable `id` stores form.id", () => {
    expectNonEmptyString(src);
    expect(/form\.id/.test(src)).toBeTruthy();
  });

  test("The variable `name` stores form.name", () => {
    expectNonEmptyString(src);
    expect(/form\.name/.test(src)).toBeTruthy();
  });

  test("Variable `length` stores form.elements.length", () => {
    expectNonEmptyString(src);
    expect(/elements\.length/.test(src)).toBeTruthy();
  });

  test("Variable `enctype` stores form.enctype", () => {
    expectNonEmptyString(src);
    expect(/form\.enctype/.test(src)).toBeTruthy();
  });

  test("Variable `className` stores form.className", () => {
    expectNonEmptyString(src);
    expect(/form\.className/.test(src)).toBeTruthy();
  });
});
