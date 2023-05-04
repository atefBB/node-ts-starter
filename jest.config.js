const { pathsToModuleNameMapper } = require("ts-jest/utils");

const { compilerOptions } = require("./tsconfig.paths.json");

module.exports = {
    rootDir: ".",
    roots: ["./src"],
    testEnvironment: "node",
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "js", "json", "node"],
    testRegex: "(/__tests__/.*|(\\.|/)(test))\\.(ts|js)?$",
    coverageDirectory: "coverage",
    collectCoverageFrom: ["src/**/*.{ts,js}", "!src/**/*.d.ts"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/",
    }),
};
