import styled from 'styled-components';
import { ThemeSwitch } from '../ThemeSwitch';

export const Header = () => {
    return (
        <Wrapper>
            <Heading>capture.me</Heading>
            <ThemeSwitch></ThemeSwitch>
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
