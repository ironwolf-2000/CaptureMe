import styled from 'styled-components';
import { SearchIcon } from '../../assets/icons';
import { InputBase } from '../common';
import { ISearchBarProps } from './Controls.types';

export const SearchBar = ({ value, hasError, onChange, onFocus, onCapture }: ISearchBarProps) => {
    return (
        <Wrapper>
            <StyledSearchIcon />
            <Input
                placeholder={hasError ? 'Invalid URL' : 'Website URL...'}
                aria-label='website url'
                hasError={hasError}
                value={hasError ? '' : value}
                onChange={e => onChange(e.target.value)}
                onFocus={onFocus}
            />
            <CaptureButton onClick={onCapture}>Capture</CaptureButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: var(--input-bg);
    width: 30rem;
    height: 4rem;
    box-sizing: border-box;
    padding: 0.5rem 0.5rem 0.5rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
`;

const Input = styled(InputBase)<{ hasError: boolean }>`
    background: transparent;
    flex-grow: 1;
    margin-right: 1rem;
    font-size: 1.1rem;
    padding: 0.5rem;

    &::placeholder {
        color: ${({ hasError }) => (hasError ? 'var(--error-color)' : 'var(--light-gray)')};
        opacity: 1;
    }
`;

const StyledSearchIcon = styled(SearchIcon)`
    stroke: var(--primary-bg);
    margin-right: 0.5rem;
`;

const CaptureButton = styled.button`
    background-color: var(--primary-bg);
    color: var(--light-gray);
    border: none;
    outline: none;
    border-radius: 1rem;
    padding: 0 1.25rem;
    cursor: pointer;
    font-size: 1.1rem;
    height: 100%;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.98);
    }

    &:focus-visible {
        outline: 0.125rem dashed var(--light-gray);
    }
`;
