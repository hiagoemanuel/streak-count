/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  setupFiles: ["dotenv/config"],
  testEnvironment: 'node'
};