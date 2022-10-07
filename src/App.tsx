import { createGlobalStyle } from 'styled-components';
import { Container, Controls, PreviewModal } from './components';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Controls />
                <PreviewModal visible={false} />
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
        --input-bg: #1f2a48;
        --primary-bg: #0378fc;
        --light-gray: #f3f5f5;
    }

    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
        height: 100%;
    }

    body {
        margin: 0;
        box-sizing: border-box;
        height: 100%;
        background: var(--dark-bg);
    }

    #root {
        height: 100%;
    }

    button {
        transition: 0.2s;
    }
`;
