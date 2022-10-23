import Head from "next/head";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { auth } from "../firebase/connection";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {
  GoogleOutlined,
  GithubOutlined,
  TwitterOutlined,
  LoginOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";

const styles = {
  input: {
    border: "1px solid #fff",
  },
  button: {
    backgroundColor: "#202225",
    border: "none",
    fontWeight: "bold",
  },
};

const Login = () => {
  const GoogleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const signInWithGoogle = () => {
    setGoogleLoading(true);
    signInWithRedirect(auth, GoogleProvider)
      .then((result) => {
        setGoogleLoading(false);
      })
      .catch((error) => {
        message.error({ content: error.message, key: "google" });
        setGoogleLoading(false);
      });
  };

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Login - MeetUs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen">
        <div className="w-[0%] md:w-[25%] lg:w-[35%] h-screen bg-primary hidden md:flex md:p-10 flex-col justify-between">
          <BsStars className="w-20 h-20 text-gray-400 md:cursor-pointer md:hover:text-white" />
          <h2 className="md:text-xl text-gray-400 lg:text-3xl font-semibold">
            <span className="font-fast-hands italic md:cursor-pointer md:hover:text-white ">
              Meet Us
            </span>
          </h2>
        </div>
        <div className="w-[100%] md:w-[75%] lg:w-[65%] flex flex-col justify-between h-screen items-center py-20 md:items-start bg-secondary md:p-20 font-bold">
          <h1 className="font-pafacto font-bold text-white">Sign In</h1>
          <div className="flex flex-col">
            <div className="flex flex-col space-y-2 w-64 md:w-96">
              <Input
                style={styles.input}
                placeholder="Username"
                className="border-white"
                addonBefore={<LoginOutlined />}
              />
              <Input.Password
                addonBefore={<KeyOutlined />}
                style={styles.input}
                placeholder="Password"
              />
              <Button
                onClick={() => setLoading(!loading)}
                style={styles.button}
                type="primary"
                loading={loading}
              >
                Sign In
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-sm text-center font-pafacto text-white">
              or - Sign In with
            </h2>
            <div className="flex space-x-5">
              <Button
                type="primary"
                style={styles.button}
                icon={<GoogleOutlined />}
                onClick={signInWithGoogle}
                loading={googleLoading}
              >
                Google
              </Button>
              <Button
                type="primary"
                style={styles.button}
                icon={<GithubOutlined />}
              >
                Github
              </Button>
              <Button
                type="primary"
                style={styles.button}
                icon={<TwitterOutlined />}
              >
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
