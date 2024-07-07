"use client"

import React from "react";
import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#24293F"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
