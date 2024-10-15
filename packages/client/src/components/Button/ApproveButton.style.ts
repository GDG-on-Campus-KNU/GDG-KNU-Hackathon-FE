import styled from "@emotion/styled";

export const Element = styled.button`
    display: flex;

    margin: 0px auto;
    border-radius: 20px;
    padding: 10px 20px;

    color: #9fa0a0;

    transition:
        background-color 0.5s ease-in-out,
        color 0.5s ease-in-out;

    &:hover {
        background-color: var(--color-blue);
        color: #fff;
        cursor: pointer;
    }
`;
