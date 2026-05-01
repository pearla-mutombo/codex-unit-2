import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 01 — What is REST API", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    doc = loadDocument(1, "lesson-08-rest-api");
  });

  it("contains an explanation mentioning REST or API", () => {
    const bodyText = doc?.body?.textContent ?? "";
    const hasExplanation = /rest\s*api|restful|api/i.test(bodyText);
    expect(hasExplanation).toBe(true);
  });
});
