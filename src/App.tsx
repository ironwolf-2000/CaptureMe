import { useState } from 'react';
import { ScreenshotService } from './services/ScreenshotService';
import { Body, Controls, Header, PreviewModal } from './components';
import { downloadImage, isValidUrl } from './utils';
import { darkTheme, GlobalStyle, lightTheme } from './assets/styles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './components/ThemeSwitch/ThemeSwitch.types';

const App = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [isInvalidUrl, setIsInvalidUrl] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const [theme, setTheme] = useState(Theme.Dark);
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
        <ThemeProvider theme={theme === Theme.Dark ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Header />
            <Body>
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
            </Body>
        </ThemeProvider>
    );
};

export default App;
