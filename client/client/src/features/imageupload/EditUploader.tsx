import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useRef,
} from "react";
import { Button, Image, Upload, message } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { PostImage } from "../../types/PostImage";
import usePostImage from "../../hooks/newPost/images/useMainImage";
import useFetchPostImages from "../../hooks/postDetails/useFetchPostImages";
import type { PostDetailsImages } from "../postDetails/components/ImageDisplay/Images";
import { useParams } from "react-router-dom";
import axios from "axios";
import useFetchNonMainImages from "../../hooks/newPost/images/useFetchNonMainImages";

const { Dragger } = Upload;

function getBase64(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
}

export type EditUploaderHandle = {
  upload: () => void;
};

const EditUploader = forwardRef<EditUploaderHandle, {}>((props, ref) => {
  const params = useParams();
  const currentPostId = Number(params.postId);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewTitle, setPreviewTitle] = useState<string>("");

  const postImages = useFetchNonMainImages(currentPostId);
  
  const getOriginalImages = (allImages: PostDetailsImages[]): UploadFile[] => {
    const originalImages: UploadFile[] = [];
    for (const image of allImages) {
      const upload: UploadFile = {
        uid: String(image.id),
        name: `post-${currentPostId}-image-id-${image.id}`,
        status: "done",
        url: image.url,
        thumbUrl: image.url,
      };
      originalImages.push(upload);
    }
    return originalImages;
  };

  const originalImagesRef = useRef<UploadFile[]>([]);

  useEffect(() => {
    if (!postImages || !currentPostId) return;
    const images = getOriginalImages(postImages);
    setFileList(images);
    originalImagesRef.current = images;

  }, [postImages, currentPostId]);

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

  const handleUpload = async () => {
    try {
      setUploading(true);

      const original = originalImagesRef.current;
      const currentExisting = fileList.filter((f) => !f.originFileObj);

      const removed = original.filter(
        (o) => !currentExisting.some((c) => c.uid == o.uid)
      );

      const added = fileList.filter((f) => !!f.originFileObj);

      for (const img of removed) {
        await axios.delete(`http://localhost:8080/api/postImages/post-main?post_image_id=${img.uid}`,);
      }

      if (added.length > 0){
        const formData = new FormData();
        added.forEach((file) => {
            const raw = file.originFileObj as RcFile | undefined;
            if (raw) {
                formData.append("file", raw);
            }
        });
        formData.append("postId", String(currentPostId));

        const res = await axios.post("http://localhost:8080/api/uploads/images", formData);

       if(res.status != 200) {
        throw new Error(res.statusText || `HTTP ${res.statusText}`);
       }

       const payload = res.data
       const responseArray = Array.isArray(payload) ? payload : [payload];

       for (var response of responseArray) {
        const imageUrl = response?.url;
        const image: PostImage = {
          url: imageUrl,
          postId: currentPostId,
          isMain: false,
          isActive: true
        };
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
      message.success("Images edited successfully.");
      }
    } 
    catch (err: any) {
          console.error(err);
          message.error(err.message || "Edit failed.");
        } finally {
          setUploading(false);
          setFileList([]);
        }
  };

  useImperativeHandle(ref, () => ({
    upload: handleUpload,
  }));

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
          <p className="ant-upload-hint">
            You can add multiple images and upload them later.
          </p>
        </Dragger>
      </div>

      <Image
        style={{ display: "none" }}
        src={previewImage}
        preview={{
          open: previewOpen,
          src: previewImage,
          onOpenChange: (vis) => setPreviewOpen(vis),
        }}
      />
    </>
  );
});

export default EditUploader;
