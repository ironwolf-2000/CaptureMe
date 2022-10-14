import { createGlobalStyle, ThemeProps } from 'styled-components';

export const GlobalStyle = createGlobalStyle<ThemeProps<Record<string, string>>>`
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
        height: 100%;
    }

    body {
        margin: 0;
        box-sizing: border-box;
        height: 100%;
        background: ${({ theme }) => theme.body};
    }

    #root {
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
