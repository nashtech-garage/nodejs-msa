module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    location: 'readonly',
    process: 'readonly',
    window: 'writable',
  },
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  overrides: [],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
      },
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console': 0,
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['error'],
    semi: ['error', 'never'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
}
