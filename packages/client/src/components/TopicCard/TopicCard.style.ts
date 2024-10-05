import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    margin: 0px auto;

    margin: 20px auto;
    border-radius: 14px;
    padding: 20px;
    padding-top: 10px;

    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Index = styled.h3`
    display: flex;
    justify-content: center;

    text-align: center;

    span {
        display: block;
        width: 20px;

        padding: 2px 0px;
        border-top: 1px solid var(--color-blue);
        border-bottom: 1px solid var(--color-blue);
    }
`;

export const Content = styled.h2`
    text-align: center;
`;
