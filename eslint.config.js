import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginLit from "eslint-plugin-lit";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      lit: pluginLit,
    },
    rules: {
      "lit/no-invalid-html": "error",
      "lit/no-legacy-template-syntax": "error",
    },
  },
];
