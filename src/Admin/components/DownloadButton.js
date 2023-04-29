import React, { useState } from 'react';

function DownloadButton({fileUrl, setFileUrl, url}) {
//   const [fileUrl, setFileUrl] = useState('');

  const handleDownloadClick = async () => {
    // replace "https://example.com/file.pdf" with the URL of your file
    // const url = url
    const response = await fetch(url);
    const blob = await response.blob();
    const urlCreator = window.URL || window.webkitURL;
    const fileUrl = urlCreator.createObjectURL(blob);
    setFileUrl(fileUrl);
  }

  return (
    <div>
      <button onClick={handleDownloadClick}
      style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      >Download File</button>
      {fileUrl && (
        <a href={fileUrl} download="file.pdf">
          Click here to download the file
        </a>
      )}
    </div>
  );
}

export default DownloadButton;
