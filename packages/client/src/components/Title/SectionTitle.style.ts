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

    font-size: 18px;
    font-weight: lighter;

    color: #fff;

    ${BREAKPOINT.MOBILE} {
        margin: 32px 0px;
        font-size: 10px;
    }
    ${BREAKPOINT.TABLET} {
        font-size: 15px;
    }
`;

export const Title = styled.h2`
    text-align: center;

    font-size: 37px;
    font-weight: bold;

    color: #fff;

    ${BREAKPOINT.MOBILE} {
        font-size: 15px;
    }
    ${BREAKPOINT.TABLET} {
        font-size: 30px;
    }
`;
