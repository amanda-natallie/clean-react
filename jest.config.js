module.exports = {
  moduleDirectories: ["node_modules", "src"],
  roots: ["src"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  // converts the test file before testing, because jest doesnt support typescript
  transform: {
    ".+\\.ts$": "ts-jest"
  }
}
