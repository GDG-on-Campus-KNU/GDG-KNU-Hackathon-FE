import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;

    max-width: 770px;
    margin: 50px auto;
    padding: 40px;
    height: 170px;

    border-radius: 20px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);

    ${BREAKPOINT.MOBILE} {
        padding: 20px;
    }
`;

export const Image = styled.img`
    display: block;

    width: 100%;

    object-fit: scale-down;

    margin: 0px auto;
`;
