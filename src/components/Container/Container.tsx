import styled from 'styled-components';
import { IContainerProps } from './Container.types';

export const Container = ({ children }: IContainerProps) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
