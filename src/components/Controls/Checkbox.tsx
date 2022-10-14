import styled from 'styled-components';
import { ICheckboxProps } from './Controls.types';

export const Checkbox = ({ label, onChange, ...props }: ICheckboxProps) => {
    return (
        <Wrapper>
            <CheckboxElement type='checkbox' onChange={e => onChange(e.target.checked)} {...props} />
            {label}
        </Wrapper>
    );
};

const Wrapper = styled.label`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
`;

const CheckboxElement = styled.input`
    appearance: none;
    background-color: ${({ theme }) => theme.lightGray};
    margin-right: 0.25rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0.25rem 0.75rem;
    border: ${({ theme }) => theme.checkboxBorder};

    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.25rem;

    display: grid;
    place-content: center;

    &::before {
        content: '';
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 0.25rem;
        transform: scale(0);
        transition: transform 120ms ease-in-out;
        background-color: ${({ theme }) => theme.primary};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus-visible {
        outline: 0.125rem dashed ${({ theme }) => theme.text};
    }
`;
