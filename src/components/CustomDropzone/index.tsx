import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  CustomDropzoneContainer,
  CustomDropzoneContent,
  CustomDropzoneImageContainer,
} from "./style";
import Image from "next/image";
import { useLinkedAccounts } from "@/context/AccountsContext";
import { SET_IMAGE } from "@/context/actionType";

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const CustomDropzone = () => {
  const { state, dispatch } = useLinkedAccounts();
  const [activeImage, setActiveImage] = useState<File>();
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const imageUrl = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    )[0];
    const imageFile = acceptedFiles[0];
    setActiveImage(imageUrl);
    // getBase64(imageFile).then((result) => {
    //   dispatch({ type: SET_IMAGE, rawImage: result });
    // });
    dispatch({ type: SET_IMAGE, rawImage: imageFile });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const displayImageFromFile = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    return <Image src={objectUrl} alt={`${file.name}`} layout="fill" />;
  };

  return (
    <CustomDropzoneContainer>
      {activeImage && (
        <CustomDropzoneImageContainer>
          {displayImageFromFile(activeImage)}
        </CustomDropzoneImageContainer>
      )}
      <CustomDropzoneContent {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files</p>
        )}
      </CustomDropzoneContent>
    </CustomDropzoneContainer>
  );
};

export default CustomDropzone;
