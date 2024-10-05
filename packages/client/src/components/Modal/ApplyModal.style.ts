import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: fixed;
    inset: 0;
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    backdrop-filter: blur(4px);

    transition: all 0.5s ease-in-out;
`;

export const Container = styled.div`
    position: relative;

    width: 240px;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 20px;
    border-radius: 12px;

    box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.2);

    background-color: #fff;
`;

export const Title = styled.h2`
    text-align: center;
`;

export const Description = styled.p`
    text-align: center;
`;
