module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  "moduleNameMapper": {
    "\\.(css|less)$": "<rootDir>/mockStyle.js"
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  coverageReporters: ['html', 'text-summary']
}
