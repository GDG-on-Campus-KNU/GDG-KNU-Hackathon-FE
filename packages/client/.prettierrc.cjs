module.exports = {
    ...require("../../.prettierrc.cjs"),
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
