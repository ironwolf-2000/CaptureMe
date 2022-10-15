import axios from 'axios';

export class ScreenshotService {
    static http = axios.create({
        baseURL: 'https://api.apiflash.com/v1/urltoimage',
        responseType: 'blob',
    });

    static loadScreenshot = async (
        url: string,
        fullPage: boolean,
        width: number = 1920,
        height: number = 1080
    ): Promise<string> => {
        const params = {
            ...{
                access_key: process.env.REACT_APP_API_KEY,
                url,
            },
            ...(fullPage ? { full_page: true } : { width, height }),
        };

        const response = await ScreenshotService.http.get('', { params });

        const blob = new Blob([response.data], { type: 'image/jpg' });
        const imageUrl = URL.createObjectURL(blob);

        return imageUrl;
    };
}
