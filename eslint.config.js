import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

const INFORMIND_RULES = {
  "react-refresh/only-export-components": [
    'warn',
    { allowConstantExport: true },
  ],
  // DILARANG MENINGGALKAN console.log() DIAKHIR
  "no-console": ['error', {allow: ['warn', 'error']}],
  // DILARANG ADA VARIABLE YANG DIDEKLARASI TETAPI TIDAK DIGUNAKAN
  "@typescript-eslint/no-unused-vars": "error",
  // DILARANG MENGGUNAKAN TIPE DATA "any"
  "@typescript-eslint/no-explicit-any": "error",
  // DILARANG MENGGUNAKAN BARIS KOSONG YANG BERLEBIHAN
  "no-multiple-empty-lines": ['error', {max: 1, maxEOF: 0}], 
}

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: INFORMIND_RULES
  },
])
