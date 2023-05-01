import { CastConnectedSharp } from "@material-ui/icons";
import React, { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
// function Converter(pdf) {
//   const [pdfBlob, setPdfBlob] = useState(null);

//   setPdfBlob(data);
//   const blob = new Blob([data], { type: "application/pdf" });

//   const downloadPdf = () => {
//     try {
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "file.pdf";
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>{pdfBlob && <button onClick={downloadPdf}>Download PDF</button>}</div>
//   );
// }

export const PostPdf = async ({ data }) => {
  console.log(`file ==> ${data}`);
  await fetch("http://localhost:5000/users/pdf", {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json; charset=utf-8; blob; text/html;multipart/form-data; application/pdf",
    },
    body: JSON.stringify({
      parameter: [data],
    }),
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "file.pdf");
    document.body.appendChild(link);
    link.click();
  });
};

// export const PostPdf = async ({ data }) => {
//   console.log(data);

//   const formData = new FormData();
//   const buffer = Buffer.from(data);
//   formData.append("pdf", buffer, { filename: "file.pdf" });

//   const response = await fetch("http://localhost:5000/users/pdf", {
//     method: "POST",
//     // headers: { "Content-Type": "multipart/form-data" },
//     headers: { "Content-Type": "application/json; charset=utf-8" },
//     body: formData,
//   });

//   const blob = await response.blob();
//   const url = window.URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.href = url;
//   link.setAttribute("download", "file.pdf");
//   document.body.appendChild(link);
//   link.click();
// };

//export default Converter;
