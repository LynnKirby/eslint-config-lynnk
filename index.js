module.exports = {
  plugins: [
    "typescript",
  ],

  extends: [
    "airbnb-base",
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  parser: "typescript-eslint-parser",

  rules: {
    // Tweak airbnb rules. Prefer double-quotes and let us decide on how to
    // format arrow functions.
    quotes: ["error", "double"],
    "arrow-body-style": "off",
    "arrow-parens": "off",

    // Misc. TypeScript rules.
    "typescript/class-name-casing": "error",
    "typescript/member-delimiter-style": "error",
    "typescript/no-angle-bracket-type-assertion": "error",
    "typescript/no-unused-vars": "error",
    "typescript/no-use-before-define": "error",
    "typescript/no-var-requires": "error",
    "typescript/type-annotation-spacing": "error",

    // Ensure JS(X) and TS(X) files are imported without an extension.
    "import/extensions": ["error", "always", {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    }],
  },

  settings: {
    // Ensure TypeScript files are checked for exports.
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
      },
    },
  },

  overrides: [
    {
      files: [
        "**/*.ts",
        "**/*.tsx",
      ],
      parser: "typescript-eslint-parser",
      rules: {
        // Bug with no-undef and import/prefer-default-export.
        // https://github.com/eslint/typescript-eslint-parser#known-issues
        "no-undef": "off",
        "import/prefer-default-export": "off",
      },
    },
  ],
};
