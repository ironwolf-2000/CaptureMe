import styled from 'styled-components';
import { SearchBar } from './SearchBar';

export const Controls = () => {
    return (
        <div>
            <SearchBar />
            <Input />
            <Input />
            <Checkbox type='checkbox' />
        </div>
    );
};

const Input = styled.input``;

const Checkbox = styled.input``;
