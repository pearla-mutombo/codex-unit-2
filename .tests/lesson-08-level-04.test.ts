import { readFileSync } from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Level 04 — Parsing the response", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-04",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
    const scriptPath = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-04",
      "script.js",
    );
    if (require("fs").existsSync(scriptPath))
      scriptText = readFileSync(scriptPath, "utf8");
  });

  it("sends a fetch request to https://jsonplaceholder.typicode.com/todos/1", () => {
    expect(scriptText.length).toBeGreaterThan(0);
    expect(
      /fetch\([^)]*jsonplaceholder\.typicode\.com\/todos\/1/i.test(
        scriptText,
      ) || /fetch\([^)]*todos\/1/i.test(scriptText),
    ).toBeTruthy();
  });

  it("uses async/await during the fetch call", () => {
    expect(
      /await\s+fetch/i.test(scriptText) ||
        /async\s+function/i.test(scriptText) ||
        /=>\s*async/i.test(scriptText),
    ).toBeTruthy();
  });

  it("parses the server response with response.json()", () => {
    expect(
      /response\s*\.json\s*\(/i.test(scriptText) ||
        /\.json\s*\(/i.test(scriptText),
    ).toBeTruthy();
  });

  it("inserts a short explanation about parsing into an element's innerText", () => {
    const bodyText = doc?.body?.textContent ?? "";
    const explainsParsing =
      /parse|parsing|parse the response|parsing the response/i.test(bodyText);
    expect(explainsParsing).toBeTruthy();
  });
});
