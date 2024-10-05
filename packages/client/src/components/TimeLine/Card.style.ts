import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Line = styled.div`
    padding: 0px 5px;

    border-left: 2px dotted #fff;
`;

export const Wrapper = styled.div`
    display: flex;

    width: 100%;
    max-width: 770px;

    margin: 0px auto;

    &:first-child > ${Line} {
        clip-path: rect(50% 100% 100% 0);
    }
    &:last-child > ${Line} {
        clip-path: rect(0% 100% 50% 0);
    }
    &:only-child > ${Line} {
        visibility: hidden;
    }
`;

export const Aside = styled.aside`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 20%;
    flex-shrink: 0;
`;

export const Dot = styled.img`
    position: absolute;
    right: -10px;

    display: block;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 85%;
    height: auto;

    padding: 20px 0px 20px 20px;

    ${BREAKPOINT.MOBILE} {
        padding: 10px 0px 10px 10px;
    }
`;

export const Item = styled.div`
    display: flex;

    width: 100%;

    border-radius: 20px;
    padding: 20px;

    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
`;

export const Time = styled.h3`
    flex-shrink: 0;

    width: 60px;
    height: fit-content;
    margin: 5px 0px;
    padding: 0px 5px;
`;

export const Content = styled.div`
    width: 100%;

    margin-left: 10px;
`;

export const Title = styled.h2`
    width: 100%;

    margin-bottom: 5px;
`;

export const Description = styled.p`
    width: 100%;
`;
