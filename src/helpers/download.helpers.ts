export const downloadImage = (href: string) => {
    const a = document.createElement('a');
    a.href = href;
    a.download = 'screenshot.jpeg';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
