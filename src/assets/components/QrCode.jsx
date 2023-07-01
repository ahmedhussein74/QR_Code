import React, { useState } from "react";
import QRCode from "qrcode.react";
import Footer from "./Footer";

const QrCode = () => {
  const [text, setText] = useState("");
  const [imgType, setImgType] = useState("png");
  const [imgName, setImgName] = useState("QR_Code");

  const handleDownloadClick = () => {
    const canvas = document.querySelector("canvas");
    const imgUrl = canvas.toDataURL(`image/${imgType}`).replace(`image/${imgType}`, "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = imgUrl;
    downloadLink.download = `${imgName}.${imgType}`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section className="w-72 md:w-96 lg:w-96 py-6 rounded mx-auto mt-12 flex flex-col items-center">
      <QRCode value={text} className="border-8 border-white" />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter URL"
        className="w-3/4 my-6 outline-none bg-transparent text-white border-b border-white placeholder-white"
      />
      <input
        type="text"
        onChange={(e) => setImgName(e.target.value)}
        placeholder="Enter QR Code name"
        className="w-3/4 my-6 outline-none bg-transparent text-white border-b border-white placeholder-white"
      />

      <div className="flex" role="group">
        <button
          type="button"
          onClick={() => setImgType("png")}
          className="px-4 py-2 mx-2 text-sm font-medium text-white bg-indigo-800 rounded-lg hover:bg-sky-600 focus:z-10 focus:bg-sky-500"
        >
          PNG
        </button>
        <button
          type="button"
          onClick={() => setImgType("jpg")}
          className="px-4 py-2 mx-2 text-sm font-medium text-white bg-indigo-800 rounded-lg hover:bg-sky-600 focus:z-10 focus:bg-sky-500"
        >
          JPG
        </button>
        <button
          type="button"
          onClick={() => setImgType("svg")}
          className="px-4 py-2 mx-2 text-sm font-medium text-white bg-indigo-800 rounded-lg hover:bg-sky-600 focus:z-10 focus:bg-sky-500"
        >
          SVG
        </button>
      </div>

      <button
        onClick={handleDownloadClick}
        className="bg-green-600 text-white rounded p-2 mt-6"
      >
        Download QR Code
      </button>
      <Footer/>
    </section>
  );
};

export default QrCode;
