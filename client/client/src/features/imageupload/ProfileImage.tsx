import React, { useImperativeHandle, useState, forwardRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import axios from "axios";
import { Image } from "antd";
import type { UploadDto } from "../../types/UploadDto";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export type ProfileImageHandle = {
  upload: (postId: number) => Promise<UploadDto[]>;
};

const ProfileImage = forwardRef<ProfileImageHandle, {}>((_props, ref) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (userId: number): Promise<UploadDto[]> => {
    const formData = new FormData();
    fileList.forEach((file) => {
      const raw = file.originFileObj as File | undefined;
      if (raw) formData.append("file", raw);
    });
    formData.append("userId", String(userId));

    setUploading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/uploads/profile",
        formData,
      );
      const payload: UploadDto[] = response.data;
      console.log(payload);
      setFileList([]);
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

export default ProfileImage;
