import { createGlobalStyle, ThemeProps } from 'styled-components';
import { size } from './Size';

export const GlobalStyle = createGlobalStyle<ThemeProps<Record<string, string>>>`
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
        height: 100%;
        
        font-size: 87.5%;

        @media only screen and (min-width: ${size.tablet}) {
            font-size: 100%;
        }
    }

    body {
        margin: 0;
        box-sizing: border-box;
        background: ${({ theme }) => theme.body};
        height: 100%;
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
