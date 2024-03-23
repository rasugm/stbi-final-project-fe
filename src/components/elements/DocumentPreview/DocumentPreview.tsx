import { Modal } from '@/components/base';

interface DocumentPreviewProps {
    isOpen: boolean;
    fileUrl: string;
    onRequestClose: () => void;
}

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ isOpen, onRequestClose, fileUrl }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onRequestClose}
            size="lg"
            isCentered
        >
            {fileUrl.endsWith('.pdf') ? (
                <div className="flex items-center justify-center w-full h-[800px]">
                    <iframe src={fileUrl} title="PDF Viewer" className="w-full h-full"/>
                </div>
            ) : (
                <div className="flex items-center justify-center w-full h-fit">
                    <img src={fileUrl} alt="File" className="w-full h-full"/>
                </div>
            )}

        </Modal>
    );
};

export default DocumentPreview;