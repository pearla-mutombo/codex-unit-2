import { readFileSync } from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Level 05 — Display the data", () => {
  let doc: Document | null = null;
  let scriptText = "";

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-05",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
    const scriptPath = path.join(
      process.cwd(),
      "lesson-08-rest-api",
      "level-05",
      "script.js",
    );
    if (require("fs").existsSync(scriptPath))
      scriptText = readFileSync(scriptPath, "utf8");
  });

  it("parses the response into the variable result", () => {
    expect(scriptText.length).toBeGreaterThan(0);
    expect(
      /await\s+fetch\([^)]*jsonplaceholder\.typicode\.com\/todos\/1/i.test(
        scriptText,
      ) || /await\s+fetch\([^)]*todos\/1/i.test(scriptText),
    ).toBeTruthy();
    expect(
      /response\s*\.json\s*\(/i.test(scriptText) ||
        /\.json\s*\(/i.test(scriptText),
    ).toBeTruthy();
    expect(
      /(?:const|let|var)\s+result\s*=/.test(scriptText) ||
        /\bresult\b/.test(scriptText),
    ).toBeTruthy();
  });

  it("extracts userId, title, and completed fields into variables", () => {
    expect(/userId/i.test(scriptText)).toBeTruthy();
    expect(/\btitle\b/i.test(scriptText)).toBeTruthy();
    expect(/isCompleted\b|\bcompleted\b/i.test(scriptText)).toBeTruthy();
  });

  it("displays userId, title, and completed on the web page", () => {
    const elUser = doc?.querySelector(
      '#userId, #userid, [id*="user"], [class*="user"]',
    );
    const elTitle = doc?.querySelector(
      '#title, [id*="title"], [class*="title"]',
    );
    const elComplete = doc?.querySelector(
      '#isCompleted, #completed, [id*="iscomplete"], [class*="iscomplete"]',
    );
    expect(elUser || elTitle || elComplete).toBeTruthy();
    expect(Boolean(elUser)).toBeTruthy();
    expect(Boolean(elTitle)).toBeTruthy();
    expect(Boolean(elComplete)).toBeTruthy();

    const forbidden = /todo|tbd|placeholder/i;

    if (elUser) {
      const text = (elUser.textContent || "").trim();
      expect(text.length).toBeGreaterThan(0);
      expect(forbidden.test(text)).toBeFalsy();
    }

    if (elTitle) {
      const text = (elTitle.textContent || "").trim();
      expect(text.length).toBeGreaterThan(0);
      expect(forbidden.test(text)).toBeFalsy();
    }

    if (elComplete) {
      const text = (elComplete.textContent || "").trim();
      expect(text.length).toBeGreaterThan(0);
      expect(forbidden.test(text)).toBeFalsy();
    }
  });
});
