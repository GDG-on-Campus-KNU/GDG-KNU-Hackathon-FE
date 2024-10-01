import styled from "@emotion/styled";

export const InputElement = styled.input`
    display: block;

    height: 30px;
    border-radius: 4px;
    padding: 0px 10px;

    background-color: #f3f3f3;

    outline: 1px solid var(--color-blue);
`;

export const InputLabel = styled.label`
    display: flex;
    align-items: center;

    span {
        margin: 0px auto;
    }
`;

export const Container = styled.div`
    display: flex;
`;
