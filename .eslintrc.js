module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    overrides: [
        {
            files: ["**/*.test.js"],
            env: {
                jest: true // now **/*.test.js files' env has both es6 *and* jest
            },
            // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
            // "extends": ["plugin:jest/recommended"]
            plugins: ["jest"],
            rules: {
                "jest/no-disabled-tests": "warn",
                "jest/no-focused-tests": "error",
                "jest/no-identical-title": "error",
                "jest/prefer-to-have-length": "warn",
                "jest/valid-expect": "error"
            }
        }
    ],
    plugins: ["react"],
    rules: {
        "indent": ["off", "tab"],
        "linebreak-style": ["off", "unix"],
        "quotes": ["off", "double"],
        "semi": ["off", "never"],
        "no-console":["off"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
};
