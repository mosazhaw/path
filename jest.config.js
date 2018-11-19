module.exports = {
    preset: "jest-preset-angular",
    roots: ["tests"],
    setupTestFrameworkScriptFile: "<rootDir>/tests/setup-jest.ts",
    testMatch: [
        "**/__tests__/**/*.+(ts)?(x)",
        "**/+(*.)+(spec|test).+(ts)?(x)"
    ],
    globals: {
        "ts-jest": {
            "tsConfigFile": "tests/tsconfig.spec.json"
        },
        "__TRANSFORM_HTML__": true
    }
}

