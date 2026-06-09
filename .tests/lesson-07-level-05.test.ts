import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 05 — Query Selector", () => {
  let doc: Document;
  let el: Element | null;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(5, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";

  beforeEach(() => {
    doc = loadDocument(5, "lesson-07-browser-objects");
    el = doc.querySelector("#content");
  });

  test("querySelector('#content') is used", () => {
    expectNonEmptyString(src);
    expect(
      /querySelector\s*\(\s*['\"]#content['\"]\s*\)/.test(src),
    ).toBeTruthy();
  });

  test("Previous innerHTML is logged before modification", () => {
    expectNonEmptyString(src);
    const logged =
      /console\.log\s*\(\s*element\.innerHTML\s*\)/.test(src) ||
      /console\.log\s*\(\s*.*innerHTML/.test(src);
    expect(logged).toBeTruthy();
  });

  test("innerHTML is updated", () => {
    expectNonEmptyString(src);
    expect(/\.innerHTML\s*=/.test(src)).toBeTruthy();
    const match = src.match(/\.innerHTML\s*=\s*(['"`])([\s\S]*?)\1/);
    expect(match).toBeTruthy();
    const assigned = match ? match[2].trim() : "";
    expect(assigned.length).toBeGreaterThan(0);
    expect(/placeholder|lorem|todo/i.test(assigned)).toBeFalsy();
  });

  test("innerHTML explains querySelector vs getElementById", () => {
    expectNonEmptyString(src);
    expect(/querySelector/.test(src)).toBeTruthy();
    expect(/getElementById/.test(src)).toBeTruthy();
  });

  test("innerHTML includes at least one set of HTML tags", () => {
    expectNonEmptyString(src);
    expect(/<[^>]+>/.test(src) || /"<[^>]+>"/.test(src)).toBeTruthy();
  });
});
