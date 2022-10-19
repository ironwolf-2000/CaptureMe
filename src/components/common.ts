import styled from 'styled-components';

export const InputBase = styled.input`
    color: ${({ theme }) => theme.text};
    border: none;
    outline: none;

    &::placeholder {
        color: ${({ theme }) => theme.text};
        opacity: 0.5;
    }

    &:focus::placeholder {
        opacity: 1;
    }
`;

export const ButtonBase = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
`;
