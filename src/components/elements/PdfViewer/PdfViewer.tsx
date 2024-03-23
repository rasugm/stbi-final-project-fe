// import { Button } from '@/components/base';
// import Icon from '@/components/base/Icon';
// import { useState, useEffect } from 'react';
// import { Document, , Page } from '@react-pdf/renderer';
import './style.css';


// pdfjs.GlobalWorkerOptions.workerxSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfViewerProps {
    pdfUrl: string;
}

const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
    // const [numPages, setNumPages] = useState(0);
    // const [pageNumber, setPageNumber] = useState(1);
    // const [pdfData, setPdfData] = useState<string | null>(null);

    // const onDocumentLoadSuccess = ({ numPages }: any) => {
    //     setNumPages(numPages);
    // };

    // const onPrevPage = () => {
    //     let curPage = pageNumber;
    //     setPageNumber(curPage - 1);
    // };

    // const onNextPage = () => {
    //     let curPage = pageNumber;
    //     setPageNumber(curPage + 1);
    // };

    // const fetchPdf = async () => {
    //     try {
    //         const response = await fetch(pdfUrl);
    //         const blob = await response.blob();
    //         const reader = new FileReader();

    //         reader.onload = () => {
    //             const pdfDataUrl = reader.result as string;
    //             setPdfData(pdfDataUrl);
    //         };

    //         reader.readAsDataURL(blob);
    //     } catch (error) {
    //         console.error('Error fetching PDF:', error);
    //     }
    // };

    // useEffect(() => {
    //     pdfUrl ? fetchPdf() : setPdfData(null);
    // }, [pdfUrl]);


    return (
        <div>
            {/* <div className="p-2 bg-primary-25 flex relative justify-between items-center"> */}
            {/* <p className="text-tertiary-500">
                    Page {pageNumber} of {numPages}
                </p> */}
            {/* <div className="flex gap-1">
                    <Button
                        onClick={onPrevPage}
                        disabled={pageNumber <= 1}
                    >
                        <Icon name="arrow-left" />
                    </Button>
                    <Button
                        onClick={onNextPage}
                        disabled={pageNumber >= numPages}
                    >
                        <Icon name="arrow-right" />
                    </Button>
                </div> */}
            {/* </div> */}
            <div>
                <object data={pdfUrl} type="application/pdf" width="100%" height="800px">
                    <p>Alternative text - include a link <a href={pdfUrl}>to the PDF!</a></p>
                </object>
                {/* {pdfData ? (
                    <Document file={pdfData}>
                        <Page pageNumber={1} />
                    </Document>
                ) : (
                    <div>No PDF loaded yet. Enter a URL and click "Load PDF."</div>
                )} */}
            </div>
        </div>
    );
};

export default PdfViewer;
