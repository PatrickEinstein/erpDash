import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { Breakdown } from "./admin-breakdown";
import { Stack } from "@mui/material";
const ScreenshotButton = () => {
  const componentRef = useRef(null);

  const handleScreenshotClick = () => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    html2canvas(document.documentElement, {
      canvas,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const blob = dataURItoBlob(imgData);
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "result.png";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <div ref={componentRef}>
        <Breakdown />
      </div>
      <button onClick={handleScreenshotClick}>Save PDF</button>
    </Stack>
  );
};

export default ScreenshotButton;
