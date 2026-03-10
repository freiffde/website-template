/**
 * @vitest-environment node
 */

import { describe, it, expect, beforeAll } from "vitest";
import NuxtLinkValidator from "../scripts/check-nuxtlink-paths.js";

describe("NuxtLink Path Validation", () => {
  let validator;
  let validationResult;

  beforeAll(async () => {
    validator = new NuxtLinkValidator();

    // Suppress console output during tests unless there are failures
    const originalConsoleLog = console.log;
    const originalConsoleWarn = console.warn;

    console.log = () => {}; // Suppress regular output
    console.warn = () => {}; // Suppress warnings

    try {
      validationResult = await validator.validate();
    } finally {
      // Restore console for test output
      console.log = originalConsoleLog;
      console.warn = originalConsoleWarn;
    }
  });

  it("should find all valid pages in the pages directory", () => {
    expect(validator.validPages.size).toBeGreaterThan(0);

    // Test some expected pages
    const expectedPages = [
      "/",
      "/about",
      "/contact",
      "/imprint",
      "/privacy",
      "/services/web-design",
      "/services/web-development",
      "/services/online-shops",
    ];

    for (const expectedPage of expectedPages) {
      expect(validator.validPages.has(expectedPage)).toBe(true);
    }
  });

  it("should find NuxtLink references in Vue components", () => {
    expect(validator.totalLinksFound).toBeGreaterThan(0);
  });

  it("should not have any broken NuxtLink references", () => {
    if (validator.brokenLinks.length > 0) {
      // Output broken links for debugging
      console.error("\n❌ Found broken NuxtLink references:");
      for (const brokenLink of validator.brokenLinks) {
        console.error(
          `  • ${brokenLink.path} in ${brokenLink.file}:${brokenLink.line}`
        );
      }
      console.error(`\nTotal broken links: ${validator.brokenLinks.length}`);
      console.error(
        `Valid pages available: ${Array.from(validator.validPages)
          .sort()
          .join(", ")}`
      );
    }

    expect(validator.brokenLinks).toHaveLength(0);
  });

  it("should have a 100% success rate for NuxtLink validation", () => {
    expect(validationResult).toBe(true);
  });

  it("should validate specific expected NuxtLink patterns", async () => {
    // Test that the validator can handle different NuxtLink syntaxes
    const testContent = `
      <template>
        <div>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink :to="'/contact'">Contact</NuxtLink>
          <NuxtLink to="/services/web-development">Services</NuxtLink>
          <NuxtLink to="https://external.com">External</NuxtLink>
          <NuxtLink to="mailto:test@example.com">Email</NuxtLink>
          <NuxtLink to="#section">Hash</NuxtLink>
        </div>
      </template>
    `;

    const links = validator.extractNuxtLinks(testContent, "test-file.vue");

    // Should extract internal links but skip external, mailto, and hash links
    const expectedInternalLinks = [
      "/",
      "/about",
      "/contact",
      "/services/web-development",
    ];
    const extractedPaths = links.map((link) => link.path);

    for (const expectedLink of expectedInternalLinks) {
      expect(extractedPaths).toContain(expectedLink);
    }

    // Should not extract external links
    expect(extractedPaths).not.toContain("https://external.com");
    expect(extractedPaths).not.toContain("mailto:test@example.com");
    expect(extractedPaths).not.toContain("#section");
  });

  it("should correctly identify line numbers for NuxtLink references", () => {
    const testContent = `<template>
  <div>
    <NuxtLink to="/test">Test Link</NuxtLink>
  </div>
</template>`;

    const links = validator.extractNuxtLinks(testContent, "test-file.vue");
    expect(links).toHaveLength(1);
    expect(links[0].line).toBe(3); // Should be on line 3
  });
});
