import ProfileImage from "../features/imageupload/ProfileImage";
import { useRef } from "react";
import type { ProfileImageHandle } from "../features/imageupload/ProfileImage";
import usePostProfileImage from "../hooks/usePostProfileImage";
import type { ProfileImg } from "../types/ProfileImg";
import { Button } from "antd";

export default function ImageTesting() {
  const profileImageRef = useRef<ProfileImageHandle>(null);

  const user_id = 28;
  const handlePost = async (values: any) => {
    console.log("user id: ", user_id);

    const imageBody = await profileImageRef.current?.upload(user_id);
    console.log("image body: ", imageBody);
    const imageUrl = Array.isArray(imageBody) ? imageBody?.[0]?.url : undefined;
    console.log("image url: ", imageUrl);

    const profileImage: ProfileImg = {
      image_url: imageUrl,
    };
    console.log(profileImage);

    usePostProfileImage(profileImage, user_id);
  };

  return (
    <div>
      <ProfileImage ref={profileImageRef}></ProfileImage>
      <Button onClick={handlePost}>SUBMIT</Button>
    </div>
  );
}
