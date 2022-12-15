module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/script-setup-uses-vars': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'vue/no-setup-props-destructure': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'consistent-return': 'off',
    'getter-return': 'off',
    'vuejs-accessibility/heading-has-content': 'off',
    'no-restricted-globals': 'off',
    'no-param-reassign': 'off',
    'vue/multi-word-component-names': 'off',

    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/anchor-has-content': 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    $ref: 'writable',
    $computed: 'writable',
    $raw: 'readonly',
    withDefaults: 'readonly',
    $fromRefs: 'readonly',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.vue', '.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
