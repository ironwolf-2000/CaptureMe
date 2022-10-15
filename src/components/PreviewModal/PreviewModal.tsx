import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DownloadIcon } from '../../assets/icons';
import { size } from '../../assets/styles/Size';
import { useWindowSize } from '../../hooks';
import { ButtonBase } from '../common';
import { IImageDimensions, IPreviewModalProps } from './PreviewModal.types';

export const PreviewModal = ({ visible, imageSrc, onClose, onDownload }: IPreviewModalProps) => {
    const [imageDimensions, setImageDimensions] = useState<IImageDimensions>();
    const imageRef = useRef<HTMLImageElement | null>(null);

    const { width } = useWindowSize();

    useEffect(() => {
        const img = imageRef.current;

        if (img) {
            setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
        }
    }, []);

    if (!visible) return null;

    return (
        <Wrapper>
            <Modal>
                <ModalContent>
                    <ModalHeader>
                        <Heading>Your screenshot</Heading>
                    </ModalHeader>
                    <ModalBody>
                        <ImageContainer>
                            <Image
                                ref={imageRef}
                                src={imageSrc}
                                alt='screenshot preview'
                                width={imageDimensions?.width}
                                height={imageDimensions?.height}
                            />
                        </ImageContainer>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonClose onClick={onClose}>Close</ButtonClose>
                        <ButtonDownload onClick={onDownload}>
                            Download
                            {width && width >= Number(size.tablet) && <StyledDownloadIcon />}
                        </ButtonDownload>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    padding: 2rem 0;
    overflow: visible;
`;

const ModalContent = styled.div`
    background-color: ${({ theme }) => theme.body};
    border-radius: 1rem;
`;

const ModalHeader = styled.div`
    padding: 1.5rem;
`;

const Heading = styled.h2`
    color: ${({ theme }) => theme.text};
    margin: 0;
`;

const ModalBody = styled.div`
    padding: 0.25rem 1.5rem;
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    width: 20rem;

    @media only screen and (min-width: ${size.tablet}) {
        width: 30rem;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    max-height: 20rem;
    overflow: auto;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0.125rem 0.375rem;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

const ModalFooter = styled.div`
    height: 2.25rem;
    padding: 1.5rem;
    display: flex;
    justify-content: flex-end;
`;

const ButtonClose = styled(ButtonBase)`
    height: 100%;
    border-radius: 1.25rem;
    padding: 0 1rem;
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    border: 0.1rem solid ${({ theme }) => theme.text};
    transition: color 0.2s, background-color 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
    }

    &:focus-visible {
        outline: 0.125rem dashed ${({ theme }) => theme.text};
    }
`;

const ButtonDownload = styled(ButtonBase)`
    height: 100%;
    margin-left: 0.5rem;
    border-radius: 1.25rem;
    padding: 0 0.75rem 0 1rem;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.lightGray};
    transition: opacity 0.2s;
    display: flex;
    align-items: center;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.98);
    }

    &:focus-visible {
        outline: 0.125rem dashed ${({ theme }) => theme.text};
    }
`;

const StyledDownloadIcon = styled(DownloadIcon)`
    stroke: ${({ theme }) => theme.lightGray};
    margin-left: 0.25rem;
    margin-bottom: 0.1rem;
    height: 1rem;
`;
