import React from "react";
import { Modal, Button, Input, Typography, Space, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function SharePostModal({
  open,
  onClose,
  postTitle,
  postUrl,
}: {
  open: boolean;
  onClose: () => void;
  postTitle: string;
  postUrl: string;
}) {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      message.success("Link copied!");
    } catch {
      message.error("Failed to copy.");
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={600}
      title={<Title level={4}>Share post</Title>}
    >
      <Text type="secondary">Share this post with everyone!</Text>

      <div style={{ marginTop: 20 }}>
        <div
          style={{
            padding: "16px",
            background: "#f5f5f5",
            borderRadius: 8,
            marginBottom: 20,
          }}
        >
          <Title level={5} style={{ margin: 0 }}>
            {postTitle}
          </Title>
        </div>

        <Space style={{ width: "100%", marginBottom: 20 }}>
          <Input value={postUrl} readOnly />
          <Button type="link" onClick={copyLink}>
            Kopiraj
          </Button>
        </Space>

      </div>
    </Modal>
  );
}