import styled from 'styled-components';
import { IBodyProps } from './Layout.types';

export const Body = ({ children }: IBodyProps) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
    width: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
