import styled from 'styled-components';
import { ICheckboxProps } from './Controls.types';

export const Checkbox = ({ label, checked, onChange }: ICheckboxProps) => {
    return (
        <Wrapper>
            <CheckboxElement type='checkbox' checked={checked} onChange={e => onChange(e.target.checked)} />
            {label}
        </Wrapper>
    );
};

const Wrapper = styled.label`
    display: flex;
    align-items: center;
    color: var(--light-gray);
    cursor: pointer;
`;

const CheckboxElement = styled.input`
    appearance: none;
    background-color: var(--light-gray);
    margin-right: 0.25rem;
    cursor: pointer;

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
        background-color: var(--primary-bg);
    }

    &:checked::before {
        transform: scale(1);
    }
`;
