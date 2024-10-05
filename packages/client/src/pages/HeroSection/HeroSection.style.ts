import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Section = styled.section`
    position: relative;

    width: 100%;
    height: 1500px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    z-index: 1;
`;

export const Header = styled.header`
    padding: 20px;

    // FIX : margin collapse
    padding-top: 1px;
    z-index: 1;
`;

export const HeaderItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 76px;

    width: auto;

    ${BREAKPOINT.MOBILE} {
        flex-direction: column;

        & > div:nth-child(1),
        & > div:nth-child(3) {
            display: none;
        }
    }
`;

export const HeaderItem = styled.div`
    display: block;
`;

export const MobileChipContainer = styled.div`
    display: none;

    ${BREAKPOINT.MOBILE} {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    margin: 10px auto;

    white-space: nowrap;
`;

export const MainLogo = styled.img`
    display: block;
    margin: 0px auto;

    width: 100%;
    max-width: 360px;
    min-width: 240px;
    height: auto;
`;

export const Body = styled.div`
    z-index: 1;

    margin: 60px auto;
`;
