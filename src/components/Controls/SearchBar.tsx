import styled, { keyframes } from 'styled-components';
import { SearchIcon } from '../../assets/icons';
import { ButtonBase, InputBase } from '../common';
import { ISearchBarProps } from './Controls.types';

export const SearchBar = ({ value, hasError, loading, onChange, onFocus, onCapture }: ISearchBarProps) => {
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
                disabled={loading}
            />
            <CaptureButton onClick={onCapture} disabled={loading}>
                <CaptureButtonText>Capture</CaptureButtonText>
            </CaptureButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.elementsBg};
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
        color: ${({ theme, hasError }) => (hasError ? theme.error : theme.text)};
        opacity: 1;
    }
`;

const StyledSearchIcon = styled(SearchIcon)`
    stroke: ${({ theme }) => theme.text};
    margin-right: 0.5rem;
`;

const load = keyframes`
    from {
        transform: translateX(-1.75rem);
    }

    to {
        transform: translateX(0);
    }
`;

const CaptureButton = styled(ButtonBase)`
    position: relative;
    background-color: ${({ theme }) => theme.action};
    color: ${({ theme }) => theme.text};
    height: 100%;
    font-size: 1.1rem;
    border-radius: 1rem;
    padding: 0 1.25rem;
    transition: opacity 0.2s;
    overflow: hidden;

    &:disabled {
        cursor: wait;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 150%;
            height: 100%;
            background: repeating-linear-gradient(
                -60deg,
                transparent,
                transparent 0.75rem,
                ${({ theme }) => theme.buttonOverlay} 0.75rem,
                ${({ theme }) => theme.buttonOverlay} 1.5rem
            );
            animation: ${load} 1s infinite linear;
        }
    }

    &:not(:disabled) {
        &:hover {
            opacity: 0.9;
        }

        &:active {
            transform: scale(0.98);
        }

        &:focus-visible {
            outline: 0.125rem dashed ${({ theme }) => theme.text};
        }
    }
`;

const CaptureButtonText = styled.span`
    position: relative;
`;
