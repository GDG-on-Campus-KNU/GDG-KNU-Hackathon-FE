import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Container = styled.div`
    display: block;

    margin-top: 200px;
    padding: 50px 0px;
`;

export const SubTitle = styled.h3`
    text-align: center;
    margin: 34px 0px;

    ${BREAKPOINT.MOBILE} {
        margin: 32px 0px;
    }
`;

export const Title = styled.h2`
    text-align: center;
`;
