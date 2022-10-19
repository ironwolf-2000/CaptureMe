import styled from 'styled-components';
import { IThemeToggleProps, Theme } from './ThemeToggle.types';

import moon from '../../assets/icons/moon.svg';
import sun from '../../assets/icons/sun.svg';

export const ThemeToggle = ({ theme, onChange }: IThemeToggleProps) => {
    return (
        <Wrapper>
            {theme === Theme.Light ? 'Dark' : 'Light'}
            <Toggle type='checkbox' checked={theme === Theme.Dark} onChange={onChange} />
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
    cursor: pointer;
    outline-offset: 0.125;

    &::before {
        content: '';
        display: inline-block;
        width: 1.75rem;
        height: 1.75rem;
        vertical-align: middle;

        background: url(${moon}) no-repeat center;
    }

    &:checked::before {
        background: url(${sun}) no-repeat center;
    }

    &:focus-visible {
        outline: 0.125rem dashed ${({ theme }) => theme.text};
    }
`;
