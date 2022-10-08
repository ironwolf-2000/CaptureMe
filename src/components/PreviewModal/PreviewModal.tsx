import { IPreviewModalProps } from './PreviewModal.types';

export const PreviewModal = ({ visible, imageSrc }: IPreviewModalProps) => {
    if (!visible) return null;

    return (
        <div>
            <img src={imageSrc} alt='screenshot preview' />
        </div>
    );
};
