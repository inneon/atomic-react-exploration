import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/out-tsc',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'type:atom',
              onlyDependOnLibsWithTags: ['type:atom', 'type:util'],
            },
            {
              sourceTag: 'type:molecule',
              onlyDependOnLibsWithTags: [
                'type:atom',
                'type:molecule',
                'type:util',
              ],
            },
            {
              sourceTag: 'type:organism',
              onlyDependOnLibsWithTags: [
                'type:atom',
                'type:molecule',
                'type:organism',
                'type:util',
              ],
            },
            {
              sourceTag: 'type:template',
              onlyDependOnLibsWithTags: [
                'type:atom',
                'type:molecule',
                'type:organism',
                'type:template',
                'type:util',
              ],
            },
            {
              sourceTag: 'type:application',
              onlyDependOnLibsWithTags: [
                'type:atom',
                'type:molecule',
                'type:organism',
                'type:template',
                'type:application',
                'type:util',
              ],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
