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
    // 1.) DILARANG MENINGGALKAN console.log() DIAKHIR
    "no-console": ['error', { allow: ['warn', 'error'] }],

    // 2.) DILARANG ADA VARIABLE YANG DIDEKLARASI TETAPI TIDAK DIGUNAKAN
    "@typescript-eslint/no-unused-vars": "error",

    // 3.) DILARANG MENGGUNAKAN TIPE DATA "any"
    "@typescript-eslint/no-explicit-any": "error",

    // 4.) DILARANG MENGGUNAKAN BARIS KOSONG YANG BERLEBIHAN
    "no-multiple-empty-lines": ['error', { max: 1, maxEOF: 0 }],

    // 5.) WAJIB MENGGUNAKAN STRICT EQUALITY (=== dan !==)
    "eqeqeq": ["error", "always"],

    // 6.) WAJIB MENGGUNAKAN 'const' JIKA VARIABEL TIDAK DI-REASSIGN
    "prefer-const": "error",

    // 7.) DILARANG MENGGUNAKAN 'var'
    "no-var": "error",

    // 8.) DILARANG MEMBUAT FUNGSI KOSONG TANPA IMPLEMENTASI
    "@typescript-eslint/no-empty-function": "error",

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
