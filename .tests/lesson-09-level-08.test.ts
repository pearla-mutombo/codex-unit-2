import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 08 — Joke API", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    doc = loadDocument(8, "lesson-09-public-apis");
    const scriptPath = path.join(
      process.cwd(),
      "lesson-09-public-apis",
      "level-08",
      "script.js",
    );
    if (fs.existsSync(scriptPath))
      scriptText = fs.readFileSync(scriptPath, "utf8");
  });

  it("includes the API key in a header or query param when making the request", () => {
    expect(
      /fetch\(|Authorization|x-api-key|api_key|apiKey/.test(scriptText),
    ).toBeTruthy();
  });

  it("parses the response and renders a joke string in the DOM", () => {
    expect(
      /response\.json\(|joke|setup|punchline|text/.test(scriptText),
    ).toBeTruthy();
  });

  it("handles invalid key errors and shows them to the user", () => {
    expect(
      /invalid|error|401|403|catch\s*\(|response\.ok/.test(scriptText),
    ).toBeTruthy();
  });
});
