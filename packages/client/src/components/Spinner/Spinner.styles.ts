import { SpinnerProps } from "./Spinner";
import styled from "@emotion/styled";

export const Element = styled.div<SpinnerProps>`
    display: block;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border: 3px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;

    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
