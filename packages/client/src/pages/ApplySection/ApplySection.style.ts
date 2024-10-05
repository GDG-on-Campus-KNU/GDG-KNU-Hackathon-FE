import { BREAKPOINT } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const EnvelopWrapper = styled.div`
    position: relative;
    top: 0;

    width: 100%;
    height: 1000px;

    margin: 0px auto;
    margin-top: 200px;
    padding: 0px 40px;

    ${BREAKPOINT.MOBILE} {
        padding: 0px 20px;
    }
`;

export const EnvelopContainer = styled.div`
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 640px;

    margin: 0px auto;
    border-radius: 16px;
    padding-bottom: 180px;

    background-color: #fff;

    ${BREAKPOINT.MOBILE} {
        padding-bottom: 150px;
    }
`;

export const Envelop = styled.div`
    width: 100%;
`;

export const EnvelopBack = styled.img`
    z-index: 0;
    position: absolute;
    bottom: 200px;
    display: block;

    width: 100%;
    max-width: 680px;

    margin: 0px auto;
`;

export const EnvelopFront = styled.img`
    z-index: 1;
    position: absolute;
    bottom: 200px;
    display: block;

    width: 100%;
    max-width: 680px;
    margin: 0px auto;
`;

export const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: 0px auto;
    padding: 10px;
`;

export const Logo = styled.img`
    width: 80px;

    margin: 0px auto;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const Line = styled.hr`
    width: 100%;
    border: 1px dashed #c8c8c8;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;

    padding: 10px;
    border-radius: 16px;

    background-color: #fff;

    & > div {
        flex: 1;
    }
    input {
        margin: 14px 0px;
        flex-grow: 1;
        flex-shrink: 0;
    }
    label {
        width: 70px;
        span {
            margin-right: 10px;
            margin-left: auto;
        }
    }
`;

export const ApplyLabel = styled.label`
    width: 100%;

    display: flex;
    align-items: center;
`;
