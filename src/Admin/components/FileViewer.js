import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";

const PdfViewer = (pdfBuffer, trigger ) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    if (pdfBuffer) {
      const blob = new Blob([pdfBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    }
  }, [trigger]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      {pdfUrl && (
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      )}
    </div>
  );
};

export default PdfViewer;
