import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 02 — Get Element By ID", () => {
  let doc: Document;
  let el: Element | null;

  const levelDir = path.dirname(
    indexHtmlPathForLevel(2, "lesson-07-browser-objects"),
  );

  beforeEach(() => {
    doc = loadDocument(2, "lesson-07-browser-objects");
    el = doc.getElementById("sample");
  });

  test("selects an element with id 'sample'", () => {
    expect(el).toBeTruthy();
  });

  test("element.id is 'sample'", () => {
    expect(el?.id).toBe("sample");
    const scriptPath = path.join(levelDir, "script.js");
    const src = fs.existsSync(scriptPath)
      ? fs.readFileSync(scriptPath, "utf8")
      : "";
    expect(src.length).toBeGreaterThan(0);
    expect(/console\.log\s*\([^)]*element\.id[^)]*\)/.test(src)).toBeTruthy();
  });

  test("element.classList contains 'note'", () => {
    expect(el?.classList.contains("note")).toBeTruthy();
    const scriptPath = path.join(levelDir, "script.js");
    const src = fs.existsSync(scriptPath)
      ? fs.readFileSync(scriptPath, "utf8")
      : "";
    expect(
      /console\.log\s*\([^)]*element\.classList[^)]*\)/.test(src),
    ).toBeTruthy();
  });

  test("element has visible innerText", () => {
    expect((el?.textContent || "").trim().length).toBeGreaterThan(0);
    const scriptPath = path.join(levelDir, "script.js");
    const src = fs.existsSync(scriptPath)
      ? fs.readFileSync(scriptPath, "utf8")
      : "";
    expect(
      /console\.log\s*\([^)]*element\.innerText[^)]*\)/.test(src),
    ).toBeTruthy();
  });

  test("element.innerHTML is non-empty", () => {
    expect((el?.innerHTML || "").length).toBeGreaterThan(0);
    const scriptPath = path.resolve(
      __dirname,
      "..",
      "lesson-07-browser-objects",
      "level-02-getelementbyid",
      "script.js",
    );
    const src = fs.existsSync(scriptPath)
      ? fs.readFileSync(scriptPath, "utf8")
      : "";
    expect(
      /console\.log\s*\([^)]*element\.innerHTML[^)]*\)/.test(src),
    ).toBeTruthy();
  });

  test("attributes include id and class", () => {
    const attrs = el?.attributes;
    expect(attrs && attrs.getNamedItem("id")).toBeTruthy();
    expect(attrs && attrs.getNamedItem("class")).toBeTruthy();
    const scriptPath = path.join(levelDir, "script.js");
    const src = fs.existsSync(scriptPath)
      ? fs.readFileSync(scriptPath, "utf8")
      : "";
    expect(
      /console\.log\s*\([^)]*element\.attributes[^)]*\)/.test(src),
    ).toBeTruthy();
  });
});
