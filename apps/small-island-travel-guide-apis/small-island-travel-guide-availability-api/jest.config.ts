/* eslint-disable */
export default {
  displayName:
    'small-island-travel-guide-apis-small-island-travel-guide-availability-api',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../coverage/apps/small-island-travel-guide-apis/small-island-travel-guide-availability-api',
};
