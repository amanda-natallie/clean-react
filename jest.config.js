module.exports = {
  moduleDirectories: ["node_modules", "src"],
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  // converts the test file before testing, because jest doesnt support typescript
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest"
  }
}
