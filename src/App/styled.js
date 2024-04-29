import styled from "styled-components";

export const Container = styled.div`
    flex-basis: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;    
`;