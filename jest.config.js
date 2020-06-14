module.exports = {
  verbose: true,
  roots: ["<rootDir>/test/unit/"],
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    '.*\\.(vue)$': "<rootDir>/node_modules/vue-jest",
  },
  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}