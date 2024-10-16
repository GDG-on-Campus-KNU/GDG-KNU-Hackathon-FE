module.exports = {
    arrowParens: "always",
    bracketSpacing: true,

    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    singleQuote: false,

    quoteProps: "as-needed",

    printWidth: 120,
    tabWidth: 4,

    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: [
        "^react",
        "<THIRD_PARTY_MODULES>",

        "^(@/common)(.*)$",
        "^(@/components)(.*)$",
        "^(@/pages)(.*)$",

        "^(@/hooks)(.*)$",
        "^(@/services)(.*)$",

        "^(@/assets)(.*)$",
        "^(@/constants)(.*)$",
        "^(@/config)(.*)$",
        "^(@/utils)(.*)$",
        "^(@/styles)(.*)$",

        "^(.*)/(.*)$",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: false,
};
