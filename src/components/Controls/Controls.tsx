import React, { useState } from 'react';
import styled from 'styled-components';

import { IControlsProps } from './Controls.types';
import { Checkbox } from './Checkbox';
import { InputBase } from '../common';
import { SearchBar } from './SearchBar';

export const Controls = ({ loading, isInvalidUrl, setIsInvalidUrl, onCapture }: IControlsProps) => {
    const [fullScreen, setFullScreen] = useState(false);
    const [urlString, setUrlString] = useState('');

    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const inputProps = {
        disabled: fullScreen || loading,
        maxLength: 4,
    };

    const handleDimensionsChange = (e: React.ChangeEvent<HTMLInputElement>, callback: (val: string) => void) => {
        const { value } = e.target;
        if (!value || /[1-9]\d*/.test(value)) {
            callback(value);
        }
    };

    const handleUrlChange = (value: string) => {
        setUrlString(value);
        setIsInvalidUrl(false);
    };

    const handleCapture = async () => {
        await onCapture(urlString, fullScreen, width ? Number(width) : undefined, height ? Number(height) : undefined);
        setUrlString('');
    };

    return (
        <Wrapper>
            <SearchBar
                loading={loading}
                value={urlString}
                hasError={isInvalidUrl}
                onChange={handleUrlChange}
                onFocus={() => setIsInvalidUrl(false)}
                onCapture={handleCapture}
            />
            <DetailsContainer>
                <InputContainer>
                    <Input
                        placeholder='Width'
                        value={width}
                        onChange={e => handleDimensionsChange(e, setWidth)}
                        aria-label='width'
                        {...inputProps}
                    />
                    <X opacity={fullScreen ? 0.5 : 1}>x</X>
                    <Input
                        placeholder='Height'
                        value={height}
                        onChange={e => handleDimensionsChange(e, setHeight)}
                        aria-label='height'
                        {...inputProps}
                    />
                </InputContainer>
                <Checkbox label='Full screen' checked={fullScreen} onChange={setFullScreen} disabled={loading} />
            </DetailsContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
`;

const DetailsContainer = styled.div`
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;
`;

const InputContainer = styled.div``;

const Input = styled(InputBase)`
    width: 4rem;
    height: 2.5rem;
    box-sizing: border-box;
    border-radius: 0.75rem;
    padding: 0.75rem;
    background-color: ${({ theme }) => theme.elementsBg};
    transition: opacity 120ms ease-in-out;
    text-align: center;

    &:disabled {
        opacity: 0.5;
    }
`;

const X = styled.span<{ opacity: number }>`
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    margin: 0 0.25rem;
    opacity: ${({ opacity }) => opacity};
    transition: opacity 120ms ease-in-out;
`;
