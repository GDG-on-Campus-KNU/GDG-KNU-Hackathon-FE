import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export interface TextProps {
    size?: "xs" | "s" | "m" | "l" | "xl";
    weight?: string | number;
    color?: string;
}

export const Text = styled.span<TextProps>`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    font-smooth: antialiased;

    font-family: "AvantGrade", "Apple SD Gothic Neo", Sans-serif;
    font-optical-sizing: auto;
    font-weight: ${(props) => props.weight ?? "normal"};
    color: ${(props) => props.color ?? "var(--color-white)"};

    font-size: ${(props) => {
        switch (props.size) {
            case "xs":
                return "12px";
            case "s":
                return "15px";
            case "m":
                return "18px";
            case "l":
                return "20px";
            case "xl":
                return "37px";
            case undefined:
                return "18px";
        }
    }};

    ${BREAKPOINT.TABLET} {
        font-size: ${(props) => {
            switch (props.size) {
                case "xs":
                    return "12px";
                case "s":
                    return "15px";
                case "m":
                    return "15px";
                case "l":
                    return "20px";
                case "xl":
                    return "30px";
            }
        }};
    }
    ${BREAKPOINT.MOBILE} {
        font-size: ${(props) => {
            switch (props.size) {
                case "xs":
                    return "10px";
                case "s":
                    return "12px"; // TODO : 수정 필요
                case "m":
                    return "15px";
                case "l":
                    return "15px";
                case "xl":
                    return "15px";
            }
        }};
    }
`;
