import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: fixed;
    bottom: 100px;

    overflow: hidden;

    width: 100vw;
    height: 100vh;

    &.cloud {
        position: absolute;
        pointer-events: none;
    }
`;

export const Image = styled.img`
    position: absolute;
    pointer-events: none;

    &.cloud1 {
        right: 0px;
        bottom: 40%;
        ${BREAKPOINT.MOBILE} {
            width: 100%;
            bottom: 20%;
        }
    }
    &.cloud2 {
        left: 0px;
        bottom: 25%;
        ${BREAKPOINT.MOBILE} {
            width: 50%;
        }
    }
    &.cloud3 {
        left: -40px;
        bottom: 12%;
        ${BREAKPOINT.MOBILE} {
            width: 50%;
        }
    }
    &.cloud4 {
        right: -20px;
        bottom: 3%;
        ${BREAKPOINT.MOBILE} {
            width: 50%;
        }
    }
    &.cloud5 {
        left: -10px;
        bottom: 5%;
        ${BREAKPOINT.MOBILE} {
            width: 50%;
        }
    }
    &.cloud6 {
        right: 20%;
        top: 65%;
        ${BREAKPOINT.MOBILE} {
            width: 50%;
        }
    }
    &.cloud7 {
        left: 20%;
        top: 75%;
        ${BREAKPOINT.MOBILE} {
            width: 50%;
        }
    }

    &.cloud8 {
        width: 30%;
        left: -50%;
        top: 50%;

        ${BREAKPOINT.MOBILE} {
            width: 50%;
        }
    }
    &.cloud9 {
        width: 25%;
        left: -50%;
        top: 60%;
        ${BREAKPOINT.MOBILE} {
            width: 50%;
        }
    }
    &.cloud10 {
        width: 30%;
        right: -50%;
        top: 70%;
        ${BREAKPOINT.MOBILE} {
            width: 50%;
        }
    }

    &.star1 {
        top: 30%;
        left: 18%;
        scale: 1;
    }
    &.star2 {
        top: 33%;
        left: 21%;
        scale: 1.1;
    }
    &.star3 {
        top: 25%;
        left: 10%;
        scale: 0.8;
    }
    &.star4 {
        top: 44%;
        left: 6%;
        scale: 1.2;
    }
    &.star5 {
        top: 38%;
        right: 20%;
        scale: 1.3;
    }
    &.star6 {
        top: 44%;
        right: 10%;
        scale: 0.9;
    }
    &.star7 {
        top: 55%;
        right: 26%;
        scale: 0.7;
    }

    &.star8 {
        top: 30%;
        left: 10%;
        scale: 1;
    }
    &.star9 {
        top: 45%;
        left: 20%;
        scale: 1.1;
    }
    &.star10 {
        top: 20%;
        right: 10%;
        scale: 1.3;
    }
    &.star11 {
        top: 70%;
        right: 25%;
        scale: 0.9;
    }
    &.star12 {
        top: 65%;
        left: 30%;
        scale: 0.8;
    }
`;

export const SunContainer = styled.div`
    position: absolute;
    left: 50%;

    width: 100%;

    &.sun,
    &.sunshine {
        position: relative;

        /* filter: drop-shadow(0 0 100px rgba(0, 0, 0, 0.5)); */
    }
    &.sun {
        left: 50%;
    }
    .sunshine {
        /* position: absolute; */
        left: 0;
        filter: brightness(1);
    }
`;
