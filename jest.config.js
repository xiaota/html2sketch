module.exports = {
  preset: 'ts-jest',
  runner: 'jest-electron/runner',
  testEnvironment: 'jest-electron/environment',
  verbose: true,
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^uuid$': '<rootDir>/test/__mocks__/uuid.ts',
    'html2sketch/(.*)$': '<rootDir>/src/$1',
    html2sketch: '<rootDir>/src',
    '@test-utils': '<rootDir>/tests/__utils__',
  },
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
