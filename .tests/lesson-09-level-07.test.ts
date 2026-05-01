import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 07 — API Keys", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    doc = loadDocument(7, "lesson-09-public-apis");
    const scriptPath = path.join(
      process.cwd(),
      "lesson-09-public-apis",
      "level-07",
      "script.js",
    );
    if (fs.existsSync(scriptPath))
      scriptText = fs.readFileSync(scriptPath, "utf8");
  });

  it('index.html contains an element with id="message"', () => {
    expect(doc!.querySelector("#message")).toBeTruthy();
  });

  it("script selects message element and inserts explanatory text", () => {
    expect(
      /querySelector\(['\"]#message['\"]\)|getElementById\(['\"]message['\"]\)/.test(
        scriptText,
      ),
    ).toBeTruthy();
    expect(/API key|API keys|api key/i.test(scriptText)).toBeTruthy();
  });
});
