import styled from 'styled-components';

export const InputBase = styled.input`
    color: var(--light-gray);
    border: none;
    outline: none;

    &::placeholder {
        color: var(--light-gray);
        opacity: 0.75;
    }
`;

export const ButtonBase = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
`;
