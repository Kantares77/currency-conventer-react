import { styled } from "styled-components";

export const StyledClock = styled.p`
    color: ${({ theme }) => theme.colors.tundora};
    text-align: right;
    font-size: 10px;
    font-family: 'Courier New', Courier, monospace;    
`;