import { ChipProps } from "./Chip";
import styled from "@emotion/styled";

export const Container = styled.div<ChipProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${(props) => props.width};
    height: 36px;

    border-radius: 36px;
    padding: 2px 10px;

    background-color: var(--color-white);
`;
