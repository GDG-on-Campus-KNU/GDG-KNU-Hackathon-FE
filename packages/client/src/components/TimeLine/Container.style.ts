import { Line } from "./Card.style";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1024px;

    margin: 0px auto;
    padding: 20px;

    ${Line}:first {
        clip-path: rect(50% 100% 100% 0);
    }
`;
