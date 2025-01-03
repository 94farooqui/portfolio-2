import React from "react";
import { education } from "./../data/HomePageData";

const Resume = () => {
  return (
    <div className="flex flex-col bg-background_secondary border border-border_primary rounded-[20px] overflow-hidden px-8 pt-8 pb-24">
      <div>
        <h2 className="text-3xl text-white font-semibold">Resume</h2>
        <div className="border-b-[5px] w-[40px]  rounded-full mt-4 border-text_yellow"></div>
      </div>

      {/* Education section */}
      <div className="p-6 mt-8">
        <div className="border-l border-text_yellow pb-6 relative">
          <div className="absolute -top-2 -left-6 bg-gradient-to-br from-text_yellow/30 via-transparent to-background_primary p-[1px] rounded-[10px] shadow-md">
            <div className=" bg-background_secondary p-[12px] rounded-[9px]">
              <img src={education.icon} className="opacity-80 w-6 h-6" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-white px-8">
            {education.title}
          </h2>
        </div>
        <div className=" flex flex-col">
          {education.degrees.map((degree, index) => (
            <div
              className={` text-sm flex flex-col gap-2 ${
                index < 2 ? "border-l" : ""
              } border-text_yellow pb-8 relative`}
            >
              <div className="w-4 h-4 bg-background_ternary rounded-full absolute top-0 -left-2 flex items-center justify-center">
                <div className="w-2 h-2 bg-text_yellow rounded-full"></div>
              </div>
              <p className=" px-8 font-semibold text-white">{degree.title}</p>
              <p className=" px-8 text-text_yellow opacity-80">{degree.year}</p>
              <p className=" px-8 text-white opacity-60">
                {degree.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section*/}
      <div className="p-6 mt-2">
        <div className="border-l border-text_yellow pb-6 relative">
          <div className="absolute -top-2 -left-6 bg-gradient-to-br from-text_yellow/30 via-transparent to-background_primary p-[1px] rounded-[10px] shadow-md">
            <div className=" bg-background_secondary p-[12px] rounded-[9px]">
              <img src={education.icon} className="opacity-80 w-6 h-6" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-white px-8">
            {education.title}
          </h2>
        </div>
        <div className=" flex flex-col">
          {education.degrees.map((degree, index) => (
            <div
              className={` text-sm flex flex-col gap-2 ${
                index < 2 ? "border-l" : ""
              } border-text_yellow pb-8 relative`}
            >
              <div className="w-4 h-4 bg-background_ternary rounded-full absolute top-0 -left-2 flex items-center justify-center">
                <div className="w-2 h-2 bg-text_yellow rounded-full"></div>
              </div>
              <p className=" px-8 font-semibold text-white">{degree.title}</p>
              <p className=" px-8 text-text_yellow opacity-80">{degree.year}</p>
              <p className=" px-8 text-white opacity-60">
                {degree.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
