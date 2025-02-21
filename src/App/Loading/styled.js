import styled from "styled-components";

export const LoadingText = styled.p`
    text-align: center;
    margin: 10px;
    color: ${({ theme }) => theme.colors.blue};
    height: 106px;
`;

export const StyledGif = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
`;