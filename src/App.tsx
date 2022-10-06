import { createGlobalStyle } from 'styled-components';
import { Container, Controls, Preview } from './components';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Controls />
                <Preview />
            </Container>
        </>
    );
};

export default App;

// Prettier doesn't format createGlobalStyle
// https://github.com/prettier/prettier/issues/11196#issuecomment-951878725
const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
    :root {
        --dark-bg: #141c2f;
        --search-bar-bg: #1f2a48;
        --button-bg: #0378fc;
        --text-color: #f3f5f5;
    }

    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
    }

    body {
        margin: 0;
        box-sizing: border-box;
    }

    button {
        transition: 0.3s;
    }
`;
