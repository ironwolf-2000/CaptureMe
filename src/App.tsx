import { useState } from 'react';
import { ScreenshotService } from './services/ScreenshotService';
import { Body, Controls, Header, PreviewModal } from './components';
import { isValidUrl } from './utils';
import { darkTheme, GlobalStyle, lightTheme } from './assets/styles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './components/ThemeToggle/ThemeToggle.types';
import { useTheme } from './hooks/useTheme';
import { downloadImage } from './helpers/download.helpers';

const App = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [isInvalidUrl, setIsInvalidUrl] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const [loading, setLoading] = useState(false);

    const [theme, toggleTheme] = useTheme();

    const handleCapture = async (urlString: string, fullPage: boolean, width?: number, height?: number) => {
        if (isValidUrl(urlString)) {
            setLoading(true);
            try {
                const src = await ScreenshotService.loadScreenshot(urlString, fullPage, width, height);
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
        <ThemeProvider theme={theme === Theme.Light ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header theme={theme} onThemeChange={toggleTheme} />
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
