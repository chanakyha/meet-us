import Head from "next/head";
import React from "react";
import { BsStars } from "react-icons/bs";

const Login = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Login - MeetUs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen">
        <div className="w-[0%] md:w-[25%] lg:w-[35%] h-screen bg-[#202225] hidden md:flex md:p-10 flex-col justify-between">
          <BsStars className="w-20 h-20 text-gray-400 md:cursor-pointer md:hover:text-white" />
          <h2 className="md:text-xl text-gray-400 lg:text-3xl font-semibold">
            <span className="font-fast-hands italic md:cursor-pointer md:hover:text-white ">
              Meet Us
            </span>
          </h2>
        </div>
        <div className="w-[100%] md:w-[75%] lg:w-[65%] h-screen bg-[#131517]"></div>
      </div>
    </div>
  );
};

export default Login;
