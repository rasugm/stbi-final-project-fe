import { Modal } from '@/components/base';
import Icon from '@/components/base/Icon';
import PdfViewer from '../../PdfViewer';

interface ModalPreviewAttachmentProps {
	isOpen: boolean;
	onClose: () => void;
	data?: any;
}

const ModalPreviewAttachment = (
    {
        isOpen,
        onClose,
        data
    }: ModalPreviewAttachmentProps
) => {

    return (
        <Modal
            isOpen={isOpen}
            isCentered={false}
            onClose={onClose}
            size="lg"
        >
            <div className="flex flex-col gap-5 m-4">
                <div className="flex justify-between items-center">
                    <h6 className="text-primary-500">Pratinjau Lampiran</h6>
                    <Icon className="cursor-pointer" name="close" onClick={onClose} />
                </div>
                {data?.filetype === 'pdf' ?
                    <PdfViewer
                        pdfUrl={data?.url}
                    />
                    : <></>}

                {/* {data?.filetype === 'image' ?
					<PdfViewer
						pdfUrl={data?.url}
					/>
					: <></>} */}

            </div>


        </Modal>

    );
};

export default ModalPreviewAttachment;
