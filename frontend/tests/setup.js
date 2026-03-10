// Test setup file
import { vi } from "vitest";

// Mock console.log to avoid spam during tests
global.console = {
  ...console,
  log: vi.fn(),
  error: console.error,
  warn: console.warn,
  info: vi.fn(),
};
