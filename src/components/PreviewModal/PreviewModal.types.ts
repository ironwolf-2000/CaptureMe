export interface IPreviewModalProps {
    visible: boolean;
    imageSrc: string;
    onClose: () => void;
    onDownload: () => void;
}

export interface IImageDimensions {
    width: number;
    height: number;
}
