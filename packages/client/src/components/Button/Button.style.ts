import { ButtonProps } from "./Button";
import styled from "@emotion/styled";

export const Element = styled.button<ButtonProps>`
    width: 100px;
    height: 36px;

    border-radius: 20px;

    font-weight: bold;
    font-size: 15px;

    color: ${(props) => {
        switch (props.variant) {
            case "white":
                return "#fff";
            case "blue":
            case "darkblue":
                return "var(--color-blue)";
        }
    }};

    border: ${(props) => {
        switch (props.variant) {
            case "white":
                return "1px solid var(--color-white)";
            default:
                return "0";
        }
    }};

    background-color: ${(props) => {
        switch (props.variant) {
            case "white":
                return "rgba(255, 255, 255, 0.30)";
            case "blue":
                return "var(--color-blue)";
            case "darkblue":
                return "var(--color-dark-blue)";
        }
    }};

    transition:
        background-color 0.5s ease-in-out,
        color 0.5s ease-in-out;

    &:hover {
        cursor: pointer;

        background-color: ${(props) => {
            switch (props.variant) {
                case "white":
                    return "rgba(255, 255, 255, 1)";
            }
        }};

        color: ${(props) => {
            switch (props.variant) {
                case "white":
                    return "var(--color-blue)";
            }
        }};
    }
`;
