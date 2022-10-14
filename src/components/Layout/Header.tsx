import styled from 'styled-components';
import { ThemeToggle } from '../ThemeToggle';
import { IHeaderProps } from './Layout.types';

export const Header = ({ theme, onThemeChange }: IHeaderProps) => {
    return (
        <Wrapper>
            <Heading>capture.me</Heading>
            <ThemeToggle theme={theme} onChange={onThemeChange}></ThemeToggle>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    width: 30rem;
    padding-left: 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.text};
`;
