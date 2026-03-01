import React, { useImperativeHandle, useState, forwardRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload, Image } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useFetchProfileImageObject from "../../hooks/editProfileImage/useFetchProfileImageObject";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export type EditProfileHandle = {
  upload: () => Promise<unknown>;
};

const EditProfileImage = forwardRef<EditProfileHandle, {}>((_props, ref) => {
  const params = useParams();
  const userId = Number(params.userId);

  const currentProfileImage = useFetchProfileImageObject(userId);

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (!currentProfileImage || !userId) return;
    setFileList([
      {
        uid: String(currentProfileImage?.user_image_id),
        name: "main-image",
        status: "done",
        url: currentProfileImage?.image_url,
        thumbUrl: currentProfileImage?.image_url,
      },
    ]);
  }, [currentProfileImage, userId]);

  const [uploading, setUploading] = useState(false);

  const isEmpty = () => {
    if (fileList.length == 0) {
      toast.error("Profile image cannot be null");
      return true;
    }
    return false;
  };

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
      console.log("Profile image did NOT change, skip upload");
      return null;
    }

    console.log("Profile image CHANGED, starting uploading");

    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("file", file.originFileObj as File);
    });
    formData.append("userId", String(userId));
    for (const f of fileList) {
      console.log("File from formData: ", f);
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/uploads/profile",
        formData,
      );
      const payload = response.data;
      setFileList([]);
      message.success("profile image updated successfully.");
      return payload;
    } catch (error) {
      message.error("profile image update failed");
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

export default EditProfileImage;
