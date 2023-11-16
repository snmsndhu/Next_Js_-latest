"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloundinaryResult {
  public_id: String;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && <CldImage></CldImage>}
      <CldUploadWidget
        uploadPreset=""
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloundinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
