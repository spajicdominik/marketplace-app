import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Button, Image, Upload, message } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { PostImage } from "../../types/PostImage";
import usePostImage from "../../hooks/newPost/images/useMainImage";

const { Dragger } = Upload;

function getBase64(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
}

export type UploaderHandle = {
  upload: (postId: number) => void;
};

const Uploader = forwardRef<UploaderHandle, {}>((props, ref) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewTitle, setPreviewTitle] = useState<string>("");

  const currentPostId = useSelector(
    (state: RootState) => state.newpost.currentPostId,
  );

  const onRemove: UploadProps["onRemove"] = (file) => {
    setFileList((prev) => prev.filter((f) => f.uid !== file.uid));
    return true;
  };

  const beforeUpload: UploadProps["beforeUpload"] = async (file) => {
    if (!file.type.startsWith("image/")) {
      message.error("You can only select image files.");
      return Upload.LIST_IGNORE;
    }

    const thumbUrl = await getBase64(file);

    setFileList((prev) => [
      ...prev,
      {
        uid: file.uid,
        name: file.name,
        status: "done",
        thumbUrl,
        originFileObj: file as RcFile,
      },
    ]);

    return false;
  };

  const onPreview: UploadProps["onPreview"] = async (file) => {
    const src = file.url || file.thumbUrl;
    if (!src) return;
    setPreviewImage(src);
    setPreviewOpen(true);
    setPreviewTitle(file.name || src.substring(src.lastIndexOf("/") + 1));
  };

  const handleUpload = async (postId: number) => {
    if (fileList.length === 0) {
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();

      fileList.forEach((file) => {
        const raw = file.originFileObj as RcFile | undefined;
        if (raw) {
          formData.append("file", raw);
        }
      });
      formData.append("postId", String(postId));

      const token = localStorage.getItem("access_token");

      const res = await fetch("http://localhost:8080/api/uploads/images", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      const payload = await res.json();

      const responseArray = Array.isArray(payload) ? payload : [payload];

      for (var response of responseArray) {
        const imageUrl = response?.url;
        const image: PostImage = {
          url: imageUrl,
          postId: currentPostId,
          isMain: false,
          isActive: true
        }
        usePostImage(image);
      }

      const nextList = fileList.map((file, idx) => {
        const resp = responseArray[idx] || {};
        return {
          ...file,
          status: "done",
          url: resp.url,
          thumbUrl: file.thumbUrl || resp.url,
          response: resp,
        } as UploadFile;
      });

      setFileList(nextList);
      message.success("Images uploaded successfully.");
    } catch (err: any) {
      console.error(err);
      message.error(err.message || "Upload failed.");
    } finally {
      setUploading(false);
      setFileList([]);
    }
  };

  useImperativeHandle(ref, () => ({
    upload: handleUpload,
  }))

  return (
    <>
      <div className="w-1/4">
        <Dragger
          multiple
          listType="picture-card"
          fileList={fileList}
          beforeUpload={beforeUpload}
          onRemove={onRemove}
          onPreview={onPreview}
          accept="image/*"
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag images here</p>
          <p className="ant-upload-hint">You can add multiple images and upload them later.</p>
        </Dragger>
      </div>

      {previewImage ? (<Image
        style={{ display: "none" }}
        src={previewImage}
        preview={{
          open: previewOpen,
          src: previewImage,
          onOpenChange: (vis) => setPreviewOpen(vis),
        }}
      />) : null}
    </>
  );
});

export default Uploader;