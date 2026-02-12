import React, { useState } from "react";
import { Button, Image, Upload, message } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

function getBase64(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
}

const Uploader: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewTitle, setPreviewTitle] = useState<string>("");

  const onRemove: UploadProps["onRemove"] = (file) => {
    setFileList((prev) => prev.filter((f) => f.uid !== file.uid));
    return true;
  };

  const beforeUpload: UploadProps["beforeUpload"] = async (file) => {
    // Accept only images (optional, also validate size)
    if (!file.type.startsWith("image/")) {
      message.error("You can only select image files.");
      return Upload.LIST_IGNORE;
    }

    // Generate local preview (thumb) for this file
    const thumbUrl = await getBase64(file);

    // Append into controlled list with a thumb
    setFileList((prev) => [
      ...prev,
      {
        uid: file.uid,
        name: file.name,
        status: "done", // mark as done so thumbnail shows immediately
        thumbUrl,       // local preview shown in list
        originFileObj: file as RcFile,
      },
    ]);

    // Prevent auto upload
    return false;
  };

  // Optional: open large preview on click
  const onPreview: UploadProps["onPreview"] = async (file) => {
    // Prefer the remote url; fallback to local thumb
    const src = file.url || file.thumbUrl;
    if (!src) return;
    setPreviewImage(src);
    setPreviewOpen(true);
    setPreviewTitle(file.name || src.substring(src.lastIndexOf("/") + 1));
  };

  const handleUpload = async () => {
    if (fileList.length === 0) {
      message.error("Please select at least one image.");
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();

      // IMPORTANT: append the **raw file** from originFileObj
      // Make sure the field name matches your Spring @RequestParam("file") or ("files")
      fileList.forEach((file) => {
        const raw = file.originFileObj as RcFile | undefined;
        if (raw) {
          formData.append("file", raw); // <-- if your controller expects @RequestParam("file") List<MultipartFile>
          // If your backend expects "files[]", use: formData.append("files[]", raw);
        }
      });

      const res = await fetch("http://localhost:8080/api/uploads/images", {
        method: "POST",
        body: formData,
        // headers: { Authorization: `Bearer ${token}` }, // if you need JWT auth
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      // Expect server to return an array of uploaded file meta:
      // e.g. [{ filename, url, originalName, size }, ...]
      const payload = await res.json();

      // Map server response back into fileList, setting .url so AntD keeps a durable preview
      // If your API returns a single object when one file is uploaded, normalize to an array
      const responseArray = Array.isArray(payload) ? payload : [payload];

      // Try to match by name; adjust if your backend returns an id or you need a different correlate
      const nextList = fileList.map((file, idx) => {
        const resp = responseArray[idx] || {};
        return {
          ...file,
          status: "done",
          // After upload, use permanent server URL for thumbnail + preview
          url: resp.url,                   // so clicking preview opens server URL
          thumbUrl: file.thumbUrl || resp.url,
          response: resp,                  // keep server payload
        } as UploadFile;
      });

      setFileList(nextList);
      message.success("Images uploaded successfully.");
    } catch (err: any) {
      console.error(err);
      message.error(err.message || "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Dragger
        multiple
        listType="picture-card"
        fileList={fileList}
        beforeUpload={beforeUpload}
        onRemove={onRemove}
        onPreview={onPreview}
        accept="image/*"
        // No `action` because we’re doing manual uploads
        // If you set `action`, AntD will auto-upload (we disabled that).
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag images here</p>
        <p className="ant-upload-hint">You can add multiple images and upload them later.</p>
      </Dragger>

      <Button
        type="primary"
        icon={<UploadOutlined />}
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Uploading..." : "Start Upload"}
      </Button>

      {/* Optional AntD preview modal via <Image.PreviewGroup> */}
      <Image
        style={{ display: "none" }}
        src={previewImage}
        preview={{
          visible: previewOpen,
          src: previewImage,
          onVisibleChange: (vis) => setPreviewOpen(vis),
        }}
      />
    </>
  );
};

export default Uploader;