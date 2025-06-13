// @ts-check
import { FlatCompat } from '@eslint/eslintrc';
import eslintReact from '@eslint-react/eslint-plugin';
import reactNamingConvention from 'eslint-plugin-react-naming-convention';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
});

const eslintConfig = [
  eslintReact.configs['recommended-typescript'],
  {
    files: ['src/**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: {
      'react-naming-convention': reactNamingConvention
    }
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: true
      }
    }
  },
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'],
    rules: {
      'react/display-name': 'off',
      'no-console': ['warn'],
      '@eslint-react/naming-convention/filename': ['error', { rule: 'kebab-case' }],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      '@typescript-eslint/switch-exhaustiveness-check': ['error'],
      'import/no-duplicates': ['error'],
      '@typescript-eslint/strict-boolean-expressions': ['error', { allowNullableString: true, allowAny: true }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: "ImportDeclaration[source.value='react'] > ImportDefaultSpecifier",
          message: 'React import is unnecessary since version 17'
        }
      ]
    }
  })
];

export default eslintConfig;
