module.exports = {
  moduleDirectories: ["node_modules", "src", "lib"],
  watchPathIgnorePatterns: ["node_modules"],
  collectCoverageFrom: ["src/**.{js}", "src/routes/**", "src/middleware/**", "src/cache/**", "lib/**"],
};
