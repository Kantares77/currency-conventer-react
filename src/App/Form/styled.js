import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0px;
    box-shadow: 1px 2px 5px;
    color: ${({ theme }) => theme.colors.gray};
    position: relative;
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.colors.tundora};
    color: ${({ theme }) => theme.colors.white}; 
    border-radius: 5px;
    padding: 10px;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.black};
`;

export const StyledResult = styled.div`
    height: 90px;
`;

export const Field = styled.input`
    border: 1px solid;
    padding: 10px;
    width: 100%;
    max-width: 300px;
    border-radius: 5px;
    box-shadow: 1px 2px 5px;
    color: ${({ theme }) => theme.colors.tundora};

    ${({ invalid }) => invalid && css`
        background-color: ${({ theme }) => theme.colors.coffee};
    `}
`;

export const StyledButton = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.tundora};
    color: ${({ theme }) => theme.colors.white};  
    padding: 10px;  
    border-radius: 5px;
    transition: 0.4s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.dove};
        transform: scale(1.01);
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.silver};
    }
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.colors.tundora};
    text-align: center;
    font-size: 10px;
`;

// export const Loading = styled.p`
//     color: ${({ theme }) => theme.colors.blue};
// `;

// export const Failure = styled.p`
//     color: ${({ theme }) => theme.colors.red};
// `;