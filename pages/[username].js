import { TwitterOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const router = useRouter();
  const username = router.query.username;
  console.log(username);

  const { user } = useAuth();

  return (
    <div className="w-screen h-screen profile-bg">
      <div className="w-[55%] flex flex-col items-center py-20 mx-auto">
        <div className="glass-morphism p-20 flex flex-col items-center">
          <img className="rounded-full" src={user?.photoURL} alt="" />
          <p className="font-bold text-xl">@{username}</p>
          <div className="inline-flex">
            <Tag icon={<TwitterOutlined />} color="#1DA1F2">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#1DA1F2">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#1DA1F2">
              Twitter
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
