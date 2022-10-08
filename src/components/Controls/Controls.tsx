import React, { useState } from 'react';
import styled from 'styled-components';

import { IControlsProps } from './Controls.types';
import { Checkbox } from './Checkbox';
import { InputBase } from '../common';
import { SearchBar } from './SearchBar';

export const Controls = ({ onCapture }: IControlsProps) => {
    const [fullScreen, setFullScreen] = useState(false);
    const [urlString, setUrlString] = useState('');

    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const inputProps = {
        disabled: fullScreen,
        maxLength: 4,
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, callback: (val: string) => void) => {
        const { value } = e.target;
        if (!value || /[1-9]\d*/.test(value)) {
            callback(value);
        }
    };

    return (
        <div>
            <SearchBar
                value={urlString}
                onChange={setUrlString}
                onCapture={() => onCapture(urlString, fullScreen, Number(width), Number(height))}
            />
            <DetailsContainer>
                <InputContainer>
                    <Input
                        placeholder='Width'
                        value={width}
                        onChange={e => handleChange(e, setWidth)}
                        {...inputProps}
                    />
                    <X opacity={fullScreen ? 0.5 : 1}>x</X>
                    <Input
                        placeholder='Height'
                        value={height}
                        onChange={e => handleChange(e, setHeight)}
                        {...inputProps}
                    />
                </InputContainer>
                <Checkbox label='Full screen' checked={fullScreen} onChange={setFullScreen} />
            </DetailsContainer>
        </div>
    );
};

const DetailsContainer = styled.div`
    margin-top: 0.25rem;
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
    background-color: var(--input-bg);
    transition: opacity 120ms ease-in-out;
    text-align: center;

    &:disabled {
        opacity: 0.5;
    }
`;

const X = styled.span<{ opacity: number }>`
    color: var(--light-gray);
    font-weight: 600;
    margin: 0 0.25rem;
    opacity: ${({ opacity }) => opacity};
    transition: opacity 120ms ease-in-out;
`;
