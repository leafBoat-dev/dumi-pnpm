module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser", // ts解析器
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "no-case-declarations": "off",
    "no-constant-condition": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-var-requires": 0,
    // 自己添加的
    indent: ["error", 2], // 使用 2 个空格缩进
    "vue/multi-word-component-names": "error", // 文件名是否为驼峰命名
    "vue/no-duplicate-attributes": "error", // 存在重复的属性
    "no-var": "error", // 需要let或const而不是var
    "no-redeclare": "error", // 变量重复声明
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
