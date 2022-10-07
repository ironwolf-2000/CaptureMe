import { IPreviewModalProps } from './PreviewModal.types';

export const PreviewModal = ({ visible }: IPreviewModalProps) => {
    if (!visible) return null;

    return <div>Preview</div>;
};
