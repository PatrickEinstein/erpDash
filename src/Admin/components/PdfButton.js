import React, { useRef } from "react";
import { Breakdown } from "./admin-breakdown";
import { Stack } from "@mui/material";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ScreenshotButtonPDF = () => {
  const componentRef = useRef(null);

  const handleScreenshotClick = () => {
    const doc = new jsPDF();

    // Get the HTML content of the component
    const html = document.querySelector(`#${componentRef.current.id}`).innerHTML;

    // Add the HTML content to the PDF document
    doc.autoTable({
      html: html,
      onRenderCell: function(cell, data) {
        // custom rendering code here
      }
    });

    // Save the PDF document
    doc.save("result.pdf");
  };

  return (
    <Stack justifyContent="space between" alignItems="center">
      <div ref={componentRef} id="myComponent">
        <Breakdown />
      </div>
      <button onClick={handleScreenshotClick}>PDF</button>
    </Stack>
  );
};

export default ScreenshotButtonPDF;
