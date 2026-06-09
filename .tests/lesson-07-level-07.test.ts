import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 07 — Submit Handler", () => {
  let doc: Document;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(7, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";

  beforeEach(() => {
    doc = loadDocument(7, "lesson-07-browser-objects");
  });

  test("A function that handles submissions is attached to the form.", () => {
    // Expect the student's code to attach a submission handler (form.onsubmit or addEventListener('submit'))
    expectNonEmptyString(src);
    const assignsOnsubmit =
      /form\.onsubmit\s*=\s*handleSubmit/.test(src) ||
      /onsubmit\s*=\s*handleSubmit/.test(src) ||
      /addEventListener\s*\(\s*['\"]submit['\"]/.test(src);
    expect(assignsOnsubmit).toBeTruthy();
  });

  test("handleSubmit accepts an event parameter", () => {
    // Expect a handleSubmit signature that accepts an event parameter
    expectNonEmptyString(src);
    const hasParam =
      /function\s+handleSubmit\s*\(\s*event\s*\)/.test(src) ||
      /const\s+handleSubmit\s*=\s*\(\s*event\s*\)\s*=>/.test(src) ||
      /let\s+handleSubmit\s*=\s*\(\s*event\s*\)\s*=>/.test(src) ||
      /handleSubmit\s*:\s*function\s*\(\s*event\s*\)/.test(src);
    expect(hasParam).toBeTruthy();
  });

  test("Log a message that explains `onsubmit`.", () => {
    // Expect the handler to log an explanatory message mentioning 'onsubmit'
    expectNonEmptyString(src);
    const logsOnsubmit =
      /console\.log\s*\(\s*['\"].*onsubmit.*['\"]\s*\)/.test(src) ||
      /console\.log\(.*onsubmit.*\)/.test(src) ||
      /console\.info\(.*onsubmit.*\)/.test(src) ||
      /console\.error\(.*onsubmit.*\)/.test(src);
    expect(logsOnsubmit).toBeTruthy();
  });
});
