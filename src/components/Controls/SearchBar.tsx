import styled from 'styled-components';
import { SearchIcon } from '../../assets/icons';
import { InputBase } from '../common';
import { ISearchBarProps } from './Controls.types';

export const SearchBar = ({ value, onChange, onCapture }: ISearchBarProps) => {
    return (
        <Wrapper>
            <StyledSearchIcon />
            <Input placeholder='Website URL...' value={value} onChange={e => onChange(e.target.value)} />
            <CaptureButton onClick={onCapture}>Capture</CaptureButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: var(--input-bg);
    width: 30rem;
    height: 4rem;
    box-sizing: border-box;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
`;

const Input = styled(InputBase)`
    background: transparent;
    flex-grow: 1;
    margin-right: 1rem;
    font-size: 1.1rem;
    padding-left: 0.5rem;
`;

const StyledSearchIcon = styled(SearchIcon)`
    stroke: var(--primary-bg);
`;

const CaptureButton = styled.button`
    background-color: var(--primary-bg);
    color: var(--light-gray);
    border: none;
    border-radius: 1rem;
    padding: 0 1.25rem;
    cursor: pointer;
    font-size: 1.1rem;
    height: 100%;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.98);
    }
`;
