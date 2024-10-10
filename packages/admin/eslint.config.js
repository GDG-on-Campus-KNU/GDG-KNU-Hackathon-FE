import importPlugin from "eslint-plugin-import";
import a11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

import js from "@eslint/js";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [
            js.configs.recommended,
            "plugin:prettier/recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:react/recommended",
            "plugin:react-hooks/recommended",
            "plugin:jsx-a11y/recommended",
            "plugin:import/errors",
            "plugin:import/warnings",
            "plugin:import/typescript",
            ...tseslint.configs.recommended,
        ],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2021,
            globals: globals.browser,
            sourceType: "module",
            project: "./tsconfig.json",
            createDefaultProgram: true,
        },
        plugins: {
            "@typescript-eslint": tseslint,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            prettier: prettier,
            "jsx-a11y": a11y,
            import: importPlugin,
            react: "eslint-plugin-react",
        },
        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
            react: {
                version: "detect",
            },
        },
        rules: {
            "no-param-reassign": ["error", { props: false }],
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-misused-promises": "off",
            "@typescript-eslint/no-floating-promises": "off",
            "react/prop-types": "off",
            "prettier/prettier": [
                "error",
                {
                    endOfLine: "auto",
                },
            ],
            "react/react-in-jsx-scope": "off",
            "import/no-unresolved": "off",
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            "no-restricted-imports": [
                {
                    patterns: ["@/features/*/*"],
                },
                {
                    paths: ["@/features/*/*"],
                    message: "Please import from the index file of the feature",
                },
                "error",
            ],
            "no-relative-import-paths/no-relative-import-paths": ["warn", { allowSameFolder: true }],
            "import/no-cycle": "error",
        },
    },
);
