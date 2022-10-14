import styled from 'styled-components';
import { MoonIcon, SunIcon } from '../../assets/icons';
import { IThemeToggleProps, Theme } from './ThemeToggle.types';

export const ThemeToggle = ({ theme, onChange }: IThemeToggleProps) => {
    return (
        <Wrapper>
            {theme === Theme.Light ? 'Dark' : 'Light'}
            {theme === Theme.Light ? <StyledMoonIcon /> : <StyledSunIcon />}
            <Toggle
                type='checkbox'
                checked={theme === Theme.Dark}
                onChange={e => onChange(e.target.checked ? Theme.Dark : Theme.Light)}
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
`;

const StyledMoonIcon = styled(MoonIcon)`
    margin-left: 0.25rem;
`;

const StyledSunIcon = styled(SunIcon)`
    margin-left: 0.25rem;
`;
