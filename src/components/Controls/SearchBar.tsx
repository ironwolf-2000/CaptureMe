import styled, { keyframes } from 'styled-components';
import { SearchIcon } from '../../assets/icons';
import { size } from '../../assets/styles/Size';
import { useWindowSize } from '../../hooks';
import { ButtonBase, InputBase } from '../common';
import { ISearchBarProps } from './Controls.types';

export const SearchBar = ({ value, hasError, loading, onChange, onFocus, onCapture }: ISearchBarProps) => {
    const { width } = useWindowSize();

    return (
        <Wrapper>
            {width && width >= parseInt(size.tablet) && <StyledSearchIcon />}
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

const Wrapper = styled.form`
    background-color: ${({ theme }) => theme.elements};
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0.25rem 0.75rem;

    padding: 0.25rem 0.25rem 0.25rem 0.5rem;
    height: 3.5rem;

    @media only screen and (min-width: ${size.tablet}) {
        padding: 0.5rem 0.5rem 0.5rem 1.25rem;
        height: 4rem;
    }
`;

const Input = styled(InputBase)<{ hasError: boolean }>`
    background: transparent;
    flex-grow: 1;
    padding: 0.5rem;
    font-size: 1rem;
    margin-right: 0.5rem;

    &::placeholder {
        color: ${({ theme, hasError }) => (hasError ? theme.error : theme.text)};
        opacity: ${({ hasError }) => (hasError ? 1 : 0.65)};
    }

    width: 12rem;

    @media only screen and (min-width: ${size.tablet}) {
        width: auto;
    }
`;

const StyledSearchIcon = styled(SearchIcon)`
    stroke: ${({ theme }) => theme.primary};
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
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.lightGray};
    height: 100%;
    border-radius: 1rem;
    padding: 0 1.125rem;
    transition: opacity 0.2s;
    overflow: hidden;
    font-size: 1rem;

    width: 8rem;

    @media only screen and (min-width: ${size.tablet}) {
        width: 6rem;
    }

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
                ${({ theme }) => theme.primaryOverlay} 0.75rem,
                ${({ theme }) => theme.primaryOverlay} 1.5rem
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
