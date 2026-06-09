import { describe, test, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import {
  loadDocument,
  indexHtmlPathForLevel,
  expectNonEmptyString,
} from "./_test-utils";

describe("Level 09 — Event Target", () => {
  let doc: Document;
  const levelDir = path.dirname(
    indexHtmlPathForLevel(9, "lesson-07-browser-objects"),
  );
  const scriptPath = path.join(levelDir, "script.js");
  const src = fs.existsSync(scriptPath)
    ? fs.readFileSync(scriptPath, "utf8")
    : "";

  beforeEach(() => {
    doc = loadDocument(9, "lesson-07-browser-objects");
  });

  test("The handler prevents the default form behavior.", () => {
    // Expect preventDefault to be called inside the handler
    expectNonEmptyString(src);
    const callsPrevent = /preventDefault\s*\(/.test(src) || /preventDefault\s*\(\s*event\.?\)/.test(src);
    expect(callsPrevent).toBeTruthy();
  });

  test("The event target is saved into a `form` variable.", () => {
    // Expect the handler to save form via event.target
    expectNonEmptyString(src);
    const savesForm = /const\s+form\s*=\s*event\.target/.test(src) || /let\s+form\s*=\s*event\.target/.test(src) || /form\s*=\s*event\.target/.test(src);
    expect(savesForm).toBeTruthy();
  });

  test("Log a message that explains 'event.target'", () => {
    // Expect the handler to log a message mentioning event.target
    expectNonEmptyString(src);
    const logs = /console\.(log|info|error)\s*\(.*event\.target.*\)/.test(src) || /console\.(log|info|error)\(.*event.*\)/.test(src);
    expect(logs).toBeTruthy();
  });
});
