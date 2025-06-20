import Image from "next/image";
import React from "react";
import HomeBackground from "./HomeBackground";

type Props = {};

const HomeSection = (props: Props) => {
  return (
    <section className="h-screen w-full relative">
      <div className="flex items-center justify-center h-full">
        <div className="flex h-full justify-center gap-6 flex-col items-center">
          <div className="text-6xl text-center font-semibold leading-[70px]">
            <h1>Enhance Your Reach With</h1>
            <h1>
              <span className="playfair italic">AI-Powered</span> Interactions
            </h1>
          </div>

          <div className="text-center text-sm w-[60%] text-gray-400 text-balance ">
            <p>
              Looma helps you automate Instagram DMs with intelligent keyword
              triggers and AI-powered responses — so you can boost engagement,
              save time, and build deeper connections at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
