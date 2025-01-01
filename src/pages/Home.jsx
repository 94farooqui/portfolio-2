import React from "react";
import { aboutMe, doing } from "./../data/HomePageData";

const Home = () => {
  return (
    <div className="flex flex-col bg-background_secondary border border-border_primary rounded-[20px] overflow-hidden px-8 pt-8 pb-24">
      <div>
        <h2 className="text-3xl text-white font-semibold">About Me</h2>
        <div className="border-b-[5px] w-[40px]  rounded-full mt-4 border-text_yellow"></div>
      </div>

      <div>
        {aboutMe.map((line) => (
          <p className="text-white opacity-70 text-sm mt-6 leading-6">{line}</p>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl text-white font-semibold ">What I'm Doing</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {doing.map((section) => (
            <div className="bg-gradient-to-br from-text_yellow/30 via-transparent to-background_primary p-[1px] rounded-[10px] shadow-md">
            <div className=" bg-zinc-800 p-[24px] rounded-[9px] flex items-start gap-4">
                <img src={section.icon} className="mt-2" />
                <div className="flex flex-col gap-2">
                  <p className="text-white font-semibold text-lg">{section.title}</p>
                  <p className="text-white opacity-80 text-sm leading-6">{section.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
