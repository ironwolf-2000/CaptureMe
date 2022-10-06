import styled from 'styled-components';

export const SearchBar = () => {
    return (
        <Wrapper>
            <Input />
            <SearchButton>Search</SearchButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: var(--search-bar-bg);
    width: 30rem;
    height: 4rem;
    box-sizing: border-box;
    padding: 0.75rem;
    display: flex;
    justify-content: space-between;
    border-radius: 0.5rem;
`;

const Input = styled.input`
    background: transparent;
    flex-grow: 1;
    color: var(--text-color);
    margin-right: 1rem;
    border: none;
`;

const SearchButton = styled.button`
    background-color: var(--button-bg);
    color: var(--text-color);
    border: none;
    border-radius: 2rem;
    padding: 0 1rem;
    cursor: pointer;
`;
