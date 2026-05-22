import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 04 — Inner HTML", () => {
  let doc: Document;
  let el: Element | null;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(4, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath) ? fs.readFileSync(scriptPath, "utf8") : "";

  beforeEach(() => {
    doc = loadDocument(4, "lesson-07-browser-objects");
    el = doc.getElementById("content");
  });

  test("getElementById('content') is used", () => {
    // The page should include an element with id="content" and the student's script should reference getElementById
    expect(el).toBeTruthy();
    expectNonEmptyString(src);
    expect(src.includes("getElementById") || src.toLowerCase().includes("getelementbyid")).toBeTruthy();
  });

  test("Previous innerHTML is logged before modification", () => {
    // Student should log the previous innerHTML value before changing it
    expectNonEmptyString(src);
    const hasConsoleLog = src.includes("console.log") || src.includes("console.error") || src.includes("console.info");
    expect(hasConsoleLog).toBeTruthy();
    expect(src.includes("innerHTML") || src.toLowerCase().includes("innerhtml")).toBeTruthy();
  });

  test("innerHTML is changed", () => {
    // Student should assign to innerHTML and avoid leaving placeholder text
    expectNonEmptyString(src);
    expect(src.includes("innerHTML") || src.includes(".innerHTML")).toBeTruthy();
    // basic heuristic: avoid obvious placeholder words
    const lowered = src.toLowerCase();
    expect(!lowered.includes("placeholder") && !lowered.includes("lorem") && !lowered.includes("todo")).toBeTruthy();
  });

  test("innerHTML is used to explain the difference between innerHTML and innerText", () => {
    // The student's innerHTML should mention both terms when explaining the difference
    expectNonEmptyString(src);
    expect(src.includes("innerHTML") && src.includes("innerText") || (src.toLowerCase().includes("innerhtml") && src.toLowerCase().includes("innertext"))).toBeTruthy();
  });

  test("innerHTML includes at least 1 set of HTML tags", () => {
    // The assigned innerHTML should contain HTML tags
    expectNonEmptyString(src);
    const hasTags = /<[^>]+>/.test(src) || src.includes("&lt;") || src.includes("<div") || src.includes("<p");
    expect(hasTags).toBeTruthy();
  });
});
