import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts}"],
  languageOptions: {
    globals: globals.browser,
  },
  rules: {
    "no-unused-vars": "error",
    "no-undef": "error",
    "no-console": "warn",
    "no-unused-expressions": "error",
    "prefer-const": "error",
  },
  ignores: [".node_modules/*"],
  globals: {
    process: "readonly",
  },
  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    "plugin:prettier/recommended", 
  ],
};
