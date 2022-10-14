import styled from 'styled-components';
import { ThemeSwitch } from '../ThemeSwitch';
import { IHeaderProps } from './Layout.types';

export const Header = ({ theme, onThemeChange }: IHeaderProps) => {
    return (
        <Wrapper>
            <Heading>capture.me</Heading>
            <ThemeSwitch theme={theme} onChange={onThemeChange}></ThemeSwitch>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    width: 28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.text};
`;
