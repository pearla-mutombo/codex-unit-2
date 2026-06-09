import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 08 — Prevent Default", () => {
  let doc: Document;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(8, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";

  beforeEach(() => {
    doc = loadDocument(8, "lesson-07-browser-objects");
  });

  test("A function that handles submissions is attached to the form.", () => {
    // Expect handleSubmit to be assigned to form.onsubmit or attached via submit listener
    expectNonEmptyString(src);
    const assignsOnsubmit =
      /form\.onsubmit\s*=\s*handleSubmit/.test(src) ||
      /onsubmit\s*=\s*handleSubmit/.test(src) ||
      /addEventListener\s*\(\s*['\"]submit['\"]\s*,\s*handleSubmit/.test(src);
    expect(assignsOnsubmit).toBeTruthy();
  });

  test("The handler prevents the default form behavior.", () => {
    // Expect preventDefault to be called inside the handler
    expectNonEmptyString(src);
    const callsPrevent = /preventDefault\s*\(\s*\)/.test(src) || /preventDefault\s*\(/.test(src);
    expect(callsPrevent).toBeTruthy();
  });

  test("Log a message that explains 'preventDefault'", () => {
    // Expect the handler to log an explanatory message mentioning 'preventDefault'
    expectNonEmptyString(src);
    const logsPrevent =
      /console\.log\s*\(\s*['\"].*preventDefault.*['\"]\s*\)/.test(src) ||
      /console\.log\(.*preventDefault.*\)/.test(src) ||
      /console\.info\(.*preventDefault.*\)/.test(src) ||
      /console\.error\(.*preventDefault.*\)/.test(src);
    expect(logsPrevent).toBeTruthy();
  });
});
