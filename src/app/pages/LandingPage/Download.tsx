import React from "react";
import Image from "next/image";
import qrcode from "@/app/images/qrcode.png";

const DownloadSection = () => {
  return (
    <section id="download" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-12">
          Download Our App
        </h2>
        <p className="text-lg mb-12 text-gray-300">
          Scan the QR code below to download our mobile app and start creating
          and sharing your stories on the go!
        </p>
        <Image
          src={qrcode}
          alt="Download QR Code"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default DownloadSection;
