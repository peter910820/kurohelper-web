import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Prettier 支援
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": ["error"], // 將 Prettier 規則當成 ESLint 錯誤
    },
    extends: [prettier], // 關閉與 Prettier 衝突的 ESLint 規則
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
