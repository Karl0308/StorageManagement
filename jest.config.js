module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',  // or 'jsdom' for browser-like environment (useful for React)
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'], // Test file patterns
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.js"], // Your setup file
};
