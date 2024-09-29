import { css } from "@emotion/react";

export const globalStyle = css`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;

        box-sizing: border-box;
    }

    #root {
        background: linear-gradient(180deg, var(--color-dark-blue) 0%, var(--color-blue) 61%);
        height: 500vh;
    }

    :root {
        --color-dark-blue: #255aae;
        --color-blue: #3b90cf;
        --color-white: #fff;
    }
`;
