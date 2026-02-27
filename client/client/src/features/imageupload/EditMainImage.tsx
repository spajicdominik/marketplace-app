import React, { useImperativeHandle, useState, forwardRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload, Image } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import axios from "axios";
import useFetchMainImageObject from "../../hooks/editPost/useFetchMainImageObject";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export type EditImageHandle = {
  upload: () => Promise<unknown>;
};

const EditMainImage = forwardRef<EditImageHandle, {}>((_props, ref) => {
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

  const [uploading, setUploading] = useState(false);

  const isEmpty = () => {
    if (fileList.length == 0) {
      toast.error("Main image cannot be null");
      return true;
    }
    return false;
  }

  const hasMainImageChanged = () => {
    const file = fileList[0];

    if (!file) return false;

    return !!file.originFileObj;
  };

  const handleUpload = async (): Promise<unknown> => {
    if (isEmpty()) {
      return null;
    }

    if (!hasMainImageChanged()) {
      console.log("Main image did NOT change, skip upload");
      return null;
    }

    console.log("Main image CHANGED, starting uploading");

    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("file", file.originFileObj as File);
    });
    formData.append("postId", String(postId));
    for (const f of fileList){
      console.log("File from formData: ", f);
    }
    try {
      const token = localStorage.getItem("access_token");

      const response = await axios.post("http://localhost:8080/api/uploads/images", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
      const payload = response.data;
      setFileList([]);
      message.success("main image updated successfully.");
      return payload;
    } catch (error) {
      message.error("main image update failed");
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
