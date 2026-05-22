import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 03 — Inner Text", () => {
  let doc: Document;
  let el: Element | null;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(3, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";

  beforeEach(() => {
    doc = loadDocument(3, "lesson-07-browser-objects");
    el = doc.getElementById("desc");
  });

  test("selects an element with id 'desc'", () => {
    expect(el).toBeTruthy();
  });

  test("saves the element in a variable named element", () => {
    expectNonEmptyString(src);
    expect(/\b(?:const|let|var)\s+element\b/.test(src)).toBeTruthy();
  });

  test("logs previous innerText via console.log(element.innerText)", () => {
    expectNonEmptyString(src);
    const logged =
      /console\.log\s*\(\s*element\.innerText\s*\)/.test(src) ||
      /console\.log\s*\(\s*.*innerText/.test(src);
    expect(logged).toBeTruthy();
  });

  test("sets element.innerText to a string containing 'innerText' (not a placeholder)", () => {
    expectNonEmptyString(src);
    const assigns =
      /element\.innerText\s*=\s*['\"](?:.*innerText.*)['\"]/.test(src) ||
      /element\.innerText\s*=/.test(src);
    expect(assigns).toBeTruthy();
    expect(
      /element\.innerText\s*=\s*['\"][^'\"]*innerText[^'\"]*['\"]/.test(src),
    ).toBeTruthy();
    expect(
      !/element\.innerText\s*=\s*['\"](?:placeholder|lorem|text)['\"]/i.test(
        src,
      ),
    ).toBeTruthy();
  });
});
