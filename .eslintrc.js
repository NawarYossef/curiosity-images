// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'promise',
    'vue',
    'sort-imports-es6-autofix',
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "require-jsdoc": ["error", {
      "require": {
        "ArrowFunctionExpression": true
      }
    }],
    "no-else-return": ["error", {
      "allowElseIf": true,
    }],
    "max-len": ["error", 100, {
      "ignoreComments": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }],
    "sort-imports-es6-autofix/sort-imports-es6": [2, {
      "ignoreCase": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/no-v-html": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "import/order": 0,
    "import/no-cycle": 0,
    "prefer-destructuring": 0,
    "no-restricted-globals": 0,
    "consistent-return": 0,
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "camelcase": "error",
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': [ 2, { 'props': false } ],
    'no-underscore-dangle': 0,
    'func-names': 0,
    'max-len': 0,
    "space-before-function-paren": ["error", "always"],
    "quote-props": ["error", "consistent-as-needed"],
    "guard-for-in": 0,
    "no-shadow": [
      "error",
      { "allow": ["state", "getters"] }
    ],
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ]
  }
};
