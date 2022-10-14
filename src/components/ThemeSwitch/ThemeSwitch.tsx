import styled from 'styled-components';
import { IThemeSwitchProps, Theme } from './ThemeSwitch.types';

export const ThemeSwitch = ({ theme, onChange }: IThemeSwitchProps) => {
    return (
        <Wrapper>
            {/* The default theme is dark */}
            {theme}
            <Toggle
                type='checkbox'
                checked={theme === Theme.Light}
                onChange={e => onChange(e.target.checked ? Theme.Light : Theme.Dark)}
            />
        </Wrapper>
    );
};

const Wrapper = styled.label`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
`;

const Toggle = styled.input`
    appearance: none;
    background-color: ${({ theme }) => theme.lightGray};
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
        background-color: ${({ theme }) => theme.primary};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus-visible {
        outline: 0.125rem dashed ${({ theme }) => theme.text};
    }
`;
