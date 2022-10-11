import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Container, Controls, PreviewModal } from './components';
import { ScreenshotService } from './services/ScreenshotService';
import { downloadImage, isValidUrl } from './utils';

const App = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [isInvalidUrl, setIsInvalidUrl] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCapture = async (urlString: string, fullScreen: boolean, width?: number, height?: number) => {
        if (isValidUrl(urlString)) {
            setLoading(true);
            try {
                const src = await ScreenshotService.loadScreenshot(urlString, fullScreen, width, height);
                setImageSrc(src);
                setModalVisible(true);
            } catch (error) {
                setIsInvalidUrl(true);
            } finally {
                setLoading(false);
            }
        } else {
            setIsInvalidUrl(true);
        }
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Controls
                    loading={loading}
                    onCapture={handleCapture}
                    isInvalidUrl={isInvalidUrl}
                    setIsInvalidUrl={setIsInvalidUrl}
                />
                <PreviewModal
                    visible={modalVisible}
                    imageSrc={imageSrc}
                    onClose={() => setModalVisible(false)}
                    onDownload={() => downloadImage(imageSrc)}
                />
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
        --dark-bg: #1f2b47;
        --input-bg: #253356;
        --primary-bg: #0378fc;
        --light-gray: #f3f5f5;
        --error-color: #df2935;
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
`;
