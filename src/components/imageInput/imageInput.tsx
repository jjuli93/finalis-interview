"use client";

import {
  FileUploadClearTrigger,
  FileUploadDropzone,
  FileUploadRoot,
} from "@/components/chakra-snippets/file-upload";
import {
  Box,
  CloseButton,
  FileUploadFileRejectDetails,
  Float,
  Image,
  useFileUploadContext,
} from "@chakra-ui/react";
import { toaster } from "../chakra-snippets/toaster";

function ImageInputContent() {
  const fileUpload = useFileUploadContext();

  const image =
    fileUpload.acceptedFiles.length &&
    URL.createObjectURL(fileUpload.acceptedFiles[0]);

  return (
    <>
      {!image ? (
        <FileUploadDropzone
          w="100%"
          h="100%"
          label="Drag and drop here to upload"
          description="Up to 5MB"
          cursor="pointer"
        ></FileUploadDropzone>
      ) : (
        <Box
          w="100%"
          h="100%"
          border="1px dashed"
          borderColor="border.emphasized"
          position="relative"
        >
          <Float offset={4} placement="top-end">
            <FileUploadClearTrigger asChild>
              <CloseButton size="xs" variant="subtle" />
            </FileUploadClearTrigger>
          </Float>
          <Image
            alt="profile photo"
            src={image}
            w="100%"
            h="100%"
            objectFit="contain"
          />
        </Box>
      )}
    </>
  );
}

type Props = {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export default function ImageInput({ inputProps }: Props) {
  function handleFileReject(e: FileUploadFileRejectDetails) {
    if (e.files.length) toaster.error({ description: "File not supported" });
  }

  return (
    <FileUploadRoot
      invalid
      maxFiles={1}
      accept="image/*"
      maxFileSize={5000000}
      w="300px"
      h="300px"
      onFileReject={handleFileReject}
      inputProps={inputProps}
    >
      <ImageInputContent />
    </FileUploadRoot>
  );
}
