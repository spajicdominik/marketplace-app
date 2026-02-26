import React, { useImperativeHandle, useState, forwardRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import axios from "axios";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export type MainImageHandle = {
  upload: (postId : number) => Promise<unknown>;
};

const MainImage = forwardRef<MainImageHandle, {}>((_props, ref) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploading, setUploading] = useState(false);

    const handleUpload = async (postId: number): Promise<unknown> => {
      const formData = new FormData();
      fileList.forEach((file) => {
        formData.append("file", file as FileType);
      });
      formData.append("postId", String(postId));
      
      setUploading(true);
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.post("http://localhost:8080/api/uploads/images", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const payload = response.data;
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
        setFileList([...fileList, file]);

        return false;
      },
      fileList,
    };

    useImperativeHandle(ref, () => ({
      upload: handleUpload,
    }));

    return (
      <>
        <Upload {...myProps}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </>
    );
});

export default MainImage;
