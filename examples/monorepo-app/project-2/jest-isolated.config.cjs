const { createDefaultPreset } = require('ts-jest')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  displayName: 'project-2',
  ...createDefaultPreset({
    tsconfig: 'project-2/tsconfig-isolated.json',
  }),
}
