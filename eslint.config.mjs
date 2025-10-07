// Root ESLint flat config for monorepo
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintPluginSecurity from 'eslint-plugin-security';
import turbo from 'eslint-plugin-turbo';

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/.turbo/**',
      '**/out/**',
      '**/build/**',
      '**/coverage/**',
    ],
  },
  {
    plugins: {
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
      turbo,
      security: eslintPluginSecurity,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // basic security checks
      'security/detect-object-injection': 'off', // too noisy usually
      // monorepo import boundaries
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
];
