
import React, { useRef } from "react";
import {
  PDFDownloadLink,
  PDFViewer,
  Document,
  Page,
  pdf,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { Breakdown } from "./breakdown";

export const MyComponent = () => {
    const ref = useRef();

    return (
      <div>
        <button onClick={generatePdf}>FINISH</button>
        <PDFViewer width="100%" height="600px">
          <Document>
            <Page size="A4">
              <Breakdown />
            </Page>
          </Document>
        </PDFViewer>
      </div>
    );
  };