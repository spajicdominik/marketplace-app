import React, { useImperativeHandle, useState, forwardRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload, Image } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import axios from "axios";
import useFetchMainImageObject from "../../hooks/editPost/useFetchMainImageObject";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export type MainImageHandle = {
  upload: () => Promise<unknown>;
};

const EditMainImage = forwardRef<MainImageHandle, {}>((_props, ref) => {
  const params = useParams();
  const postId = Number(params.postId);

  const currentMainImage = useFetchMainImageObject(postId);

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (!currentMainImage || !postId) return;
    setFileList([
      {
        uid: String(currentMainImage?.id),
        name: "main-image",
        status: "done",
        url: currentMainImage?.url,
        thumbUrl: currentMainImage?.url,
      },
    ]);
  }, [currentMainImage, postId]);

  console.log("Post id:", postId);
  console.log("Current main image: ", currentMainImage);
  console.log("File list: ", fileList);

  const [uploading, setUploading] = useState(false);

  const handleUpload = async (): Promise<unknown> => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("file", file as FileType);
    });
    setUploading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/uploads/images",
        formData,
      );
      const payload = response.data;
      setFileList([]);
      message.success("upload successfully.");
      return payload;
    } catch (error) {
      message.error("upload failed");
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const myProps: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      const previewUrl = URL.createObjectURL(file);

      setFileList([
        {
          uid: file.uid,
          name: file.name,
          status: "done",
          thumbUrl: previewUrl,
          originFileObj: file,
        },
      ]);
      return false;
    },
    fileList,
  };

  useImperativeHandle(ref, () => ({
    upload: handleUpload,
  }));

  const previewSrc = fileList[0]?.url || fileList[0]?.thumbUrl;

  return (
    <div className="flex flex-col w-fit">
      <Upload {...myProps}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <div className="w-100 h-fit">
        <Image src={previewSrc} />
      </div>
    </div>
  );
});

export default EditMainImage;
