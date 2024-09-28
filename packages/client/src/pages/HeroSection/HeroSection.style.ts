import styled from "@emotion/styled";

export const Section = styled.section`
    position: relative;

    width: 100%;
    height: 1500px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    z-index: 1;
`;

export const Header = styled.header`
    // FIX : margin collapse
    padding-top: 1px;
    z-index: 1;
`;

export const HeaderItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    width: auto;
`;

export const HeaderItem = styled.div`
    display: block;
`;

export const Title = styled.h2`
    text-align: center;
    margin: 10px auto;
`;

export const MainLogo = styled.img`
    display: block;
    margin: 0px auto;

    width: 100%;
    max-width: 360px;
    min-width: 240px;
    height: auto;
`;

export const Body = styled.div`
    z-index: 1;

    margin: 60px auto;
`;
