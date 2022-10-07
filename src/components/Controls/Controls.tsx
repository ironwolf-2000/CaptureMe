import styled from 'styled-components';
import { InputBase } from '../common';
import { Checkbox } from './Checkbox';
import { SearchBar } from './SearchBar';

export const Controls = () => {
    return (
        <div>
            <SearchBar />
            <DetailsContainer>
                <InputContainer>
                    <Input placeholder='width' />
                    <Input placeholder='height' />
                </InputContainer>
                <Checkbox label='Full screen' />
            </DetailsContainer>
        </div>
    );
};

const DetailsContainer = styled.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
`;

const InputContainer = styled.div``;

const Input = styled(InputBase)`
    width: 8rem;
    height: 2rem;
    box-sizing: border-box;
    border-radius: 0.75rem;
    padding: 1rem;
    background-color: var(--input-bg);
    margin-right: 0.25rem;
`;
