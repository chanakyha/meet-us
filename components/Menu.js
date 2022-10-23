import {
  GithubOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Divider, message, PageHeader, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { auth } from "../firebase/connection";
import { signOut } from "firebase/auth";

const Header = () => {
  const { user } = useAuth();
  const [providers, setProviders] = useState([]);
  const [signoutLoading, setSignoutLoading] = useState(false);
  console.log(user);

  useEffect(() => {
    setProviders(user?.providerData?.map((provider) => provider?.providerId));
  }, [user]);

  const signOutUser = () => {
    setSignoutLoading(true);
    message.loading({ content: "Loading...", key: "signout", duration: 0 });
    signOut(auth)
      .then(() => {
        setSignoutLoading(false);
        message.success({ content: "Signed out", key: "signout" });
        console.log("Signed out");
      })
      .catch((error) => {
        setSignoutLoading(false);
        message.error({ content: error.message, key: "signout" });
        console.log(error);
      });
  };

  return (
    <div className="w-full">
      <PageHeader
        className="site-page-header"
        title={user?.displayName}
        subTitle={"@" + "chanakyha"}
        extra={[
          <Button>View Profile</Button>,
          <Button
            onClick={signOutUser}
            type="primary"
            loading={signoutLoading}
            danger
          >
            Sign Out
          </Button>,
        ]}
        avatar={{ src: user?.photoURL }}
        tags={[
          providers?.includes("google.com") && (
            <Tag icon={<GoogleOutlined />} color="#0F9D58">
              Google
            </Tag>
          ),
          providers?.includes("github.com") && (
            <Tag icon={<GithubOutlined />} color="#333333">
              Google
            </Tag>
          ),
          providers?.includes("twitter.com") && (
            <Tag icon={<TwitterOutlined />} color="#1DA1F2">
              Twitter
            </Tag>
          ),
        ]}
      />
      <Divider style={{ margin: 0 }} />
    </div>
  );
};
export default Header;
