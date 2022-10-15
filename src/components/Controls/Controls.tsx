import React, { useState } from 'react';
import styled from 'styled-components';

import { IControlsProps } from './Controls.types';
import { Checkbox } from './Checkbox';
import { InputBase } from '../common';
import { SearchBar } from './SearchBar';
import { size } from '../../assets/styles/Size';

export const Controls = ({ loading, isInvalidUrl, setIsInvalidUrl, onCapture }: IControlsProps) => {
    const [fullPage, setFullPage] = useState(false);
    const [urlString, setUrlString] = useState('');

    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const inputProps = {
        disabled: fullPage || loading,
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
        await onCapture(urlString, fullPage, width ? Number(width) : undefined, height ? Number(height) : undefined);
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
                <div>
                    <Input
                        placeholder='Width'
                        value={width}
                        onChange={e => handleDimensionsChange(e, setWidth)}
                        aria-label='width'
                        {...inputProps}
                    />
                    <X opacity={fullPage ? 0.5 : 1}>x</X>
                    <Input
                        placeholder='Height'
                        value={height}
                        onChange={e => handleDimensionsChange(e, setHeight)}
                        aria-label='height'
                        {...inputProps}
                    />
                </div>
                <Checkbox label='Full page' checked={fullPage} onChange={setFullPage} disabled={loading} />
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

const Input = styled(InputBase)`
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.elements};
    transition: opacity 120ms ease-in-out, box-shadow 120ms ease-in-out;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0.25rem 0.75rem;
    border-radius: 0.75rem;
    width: 4rem;
    height: 2.5rem;

    &:disabled {
        opacity: 0.5;
        box-shadow: none;
    }

    padding: 0.5rem;

    @media only screen and (min-width: ${size.tablet}) {
        padding: 0.75rem;
    }
`;

const X = styled.span<{ opacity: number }>`
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    margin: 0 0.25rem;
    opacity: ${({ opacity }) => opacity};
    transition: opacity 120ms ease-in-out;
`;
