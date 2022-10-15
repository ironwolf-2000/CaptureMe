import styled from 'styled-components';
import { size } from '../../assets/styles/Size';
import { IBodyProps } from './Layout.types';

export const Body = ({ children }: IBodyProps) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    width: 20rem;

    @media screen and (min-width: ${size.tablet}) {
        width: 30rem;
    }
`;
