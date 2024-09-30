import styled from "@emotion/styled";

export const Element = styled.div<{ selected: boolean }>`
    display: flex;
    align-items: center;

    width: fit-content;
    height: 30px;

    padding: 0px 10px;
    border: 1px solid var(--color-blue);
    border-radius: 4px;

    background-color: ${(props) => (props.selected ? "var(--color-blue)" : "#fff")};
    span {
        color: ${(props) => (props.selected ? "#fff" : "var(--color-blue)")};
    }

    &:hover {
        cursor: pointer;
    }
`;
