import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.nav`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 40px;

    padding: 5px 15px;

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);

    ${BREAKPOINT.MOBILE} {
        height: 28px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0px auto;

    width: 100%;
    max-width: 1400px;
    height: 100%;
`;

export const Item = styled.div`
    span {
        margin: 0px 5px;
    }
    ${BREAKPOINT.MOBILE} {
        &:first-child > span:first-child {
            display: none;
        }
    }
`;
